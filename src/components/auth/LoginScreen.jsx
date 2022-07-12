import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser, login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: 'jhon@mail.com',
    password: '12345'
  })

  const { email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getUser(email, password))
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form className='auth__form' onSubmit={handleSubmit}>
        <input
          className='auth__input'
          type="email"
          placeholder='youremail@mail.com'
          name='email'
          value={email}
          onChange={handleInputChange}
          autoComplete='off'
        />
        <input
          className='auth__input'
          type="password"
          placeholder='*********'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
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
        <Link className='link' to={'/auth/register'}>
          Create new account
        </Link>
      </form>
    </>
  )
}
