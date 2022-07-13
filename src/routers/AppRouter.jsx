import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    });
  }, [setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JournalScreen />} />
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='*' element={<h1>404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
