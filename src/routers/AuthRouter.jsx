import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { Component404 } from '../components/journal/Component404'

export const AuthRouter = () => {
  return (
    <div className="auth__main grid">
      <div className='auth__container'>
        <Routes >
          <Route index element={ <LoginScreen /> }/>
          <Route path='/login' element={ <LoginScreen /> }/>
          <Route path='/register' element={ <RegisterScreen /> } />
          <Route path='*' element={ <Component404 /> }/>
        </Routes>
      </div>
    </div>
  )
}
