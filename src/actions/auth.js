import { types } from "../types/types"
import { auth, googleProvider, signInWithPopup } from '../firebase/config'
import { GoogleAuthProvider } from "firebase/auth";

export const getUser = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login('f23adf', 'Jhon'))
    }, 2000);
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

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  }
})