import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form className='auth__form'>
        <input
          className='auth__input'
          type="text"
          placeholder='Name'
          name='name'
          autoComplete='off'
        />
        <input
          className='auth__input'
          type="email"
          placeholder='youremail@mail.com'
          name='email'
          autoComplete='off'
        />
        <input className='auth__input' type="password" placeholder='*********' name='password' />
        <input className='auth__input' type="password" placeholder='Confirm your password' name='password2' />
        <button className='button button--primary' type='submit'>Create new account</button>
        <Link className='link' to={'/auth/login'}>
          Already registered?
        </Link>
      </form>
    </>
  )
}
