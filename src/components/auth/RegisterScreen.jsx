import React from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui'
import { useDispatch, useSelector } from 'react-redux'
import { startEmailPasswordNameLogin } from '../../actions/auth'

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name: 'Jhon',
    email: 'jhon@mail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = formValues

  const dispatch = useDispatch()

  const { msgError } = useSelector(state => state.ui)

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(startEmailPasswordNameLogin(email, password, name))
    }
  }

  const isFormValid = () => {
    if (name.trim().length < 2) {
      dispatch(setError('name is required'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('password should be at least 6 characters and must match'))
      return false
    }
    dispatch(removeError())
    return true
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form className='auth__form' onSubmit={handleRegister}>
        {
          msgError &&
          <div className='auth__alert-error'>
            {msgError}
          </div>
        }
        <input
          className='auth__input'
          type="text"
          placeholder='Name'
          name='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type="text"
          placeholder='youremail@mail.com'
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type="password"
          placeholder='*********'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type="password"
          placeholder='Confirm your password'
          name='password2'
          value={password2}
          onChange={handleInputChange}
        />
        <button className='button button--primary' type='submit'>Create new account</button>
        <Link className='link' to={'/auth/login'}>
          Already registered?
        </Link>
      </form>
    </>
  )
}
