import React, { useState } from 'react'

export const UserForm = ({ onSubmit }) => {
  const [form, useForm] = useState({
    email: '',
    password: ''
  })

  const handleFormChange = event => {
    useForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='email'
        name='email'
        placeholder='e-mail'
        onChange={handleFormChange}
      />
      <input
        type='password'
        name='password'
        placeholder='contraseña'
        onChange={handleFormChange}
      />
      <input type='submit' value='iniciar sesión' onChange={handleFormChange} />
    </form>
  )
}
