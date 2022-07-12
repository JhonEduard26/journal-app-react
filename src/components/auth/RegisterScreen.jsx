import React from 'react'
import { isEmail } from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name: 'Jhon',
    email: 'jhon@mail.com',
    password: '12345',
    password2: '12345'
  })

  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      console.log('Formulario correcto')
    } else {
      console.log('Incorrecto')
    }
  }

  const isFormValid = () => {
    if (name.trim().length < 2) {
      console.log('name is required')
      return false
    } else if (!isEmail(email)) {
      return false
    } else if ((password !== password2) || (password.length < 5 && password2.length < 5)) {
      console.log('password should be at least 6 characters')
      return false
    }
    return true
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form className='auth__form' onSubmit={handleRegister}>
        <div className='auth__alert-error'>
          Hello world!
        </div>
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
