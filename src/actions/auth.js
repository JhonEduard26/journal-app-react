import { types } from "../types/types"
import Swal from 'sweetalert2'
import { GoogleAuthProvider, signOut } from "firebase/auth";
import {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from '../firebase/config'
import { finishLoading, startLoading } from "./ui";
import { notesLogout } from "./notes";

export const startEmailPasswordLogin = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
      })
      .catch(() => {
        Swal.fire({
          title: 'Error de autenticación',
          text: 'El usuario o contraseña son incorrectos',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
      .finally(() => {
        dispatch(finishLoading())
      })
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const { displayName, uid, email } = user
        dispatch(login(uid, displayName))
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
}

export const startRegisterEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user
        await updateProfile(user, {
          displayName: name,
        })
        dispatch(login(user.uid, user.displayName))
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Correo electronico ya está en uso',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  }
})

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth)
    dispatch(logout())
    dispatch(notesLogout())
  }
}

const logout = () => ({
  type: types.logout
})