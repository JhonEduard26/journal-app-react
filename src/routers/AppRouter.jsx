import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
        const notes = await loadNotes(user.uid)
        dispatch(setNotes(notes))
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    });
  }, [setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute logged={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          } />
        <Route
          path='/auth/*'
          element={
            <PublicRoute logged={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route path='*' element={<h1>404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
