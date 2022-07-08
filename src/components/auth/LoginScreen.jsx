import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form className='auth__form'>
        <input
          className='auth__input'
          type="email"
          placeholder='youremail@mail.com'
          name='email'
          autoComplete='off'
        />
        <input className='auth__input' type="password" placeholder='*********' name='password' />
        <button className='button button--primary' type='submit'>Login</button>
        <div className='auth__social-media'>
          <p className='auth__text-media'>Login with social media</p>
          <div className="google-btn grid">
            <figure className="google-icon-wrapper grid">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </figure>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to={'/auth/register'}>
          Create new account
        </Link>
      </form>
    </>
  )
}
