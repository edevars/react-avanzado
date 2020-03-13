import React, { useState } from 'react'
import { Link } from '@reach/router'

import {
  Title,
  Subtitle,
  ImageWrapper,
  Form,
  Input,
  Submit,
  Paragraph
} from './styles'

export const LoginForm = ({ onSubmit }) => {
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
    <>
      <Title>Iniciar sesión</Title>
      <Subtitle>
        Disfruta de tus mascotas favoritas ahora mismo
      </Subtitle>
      <ImageWrapper>
        <img
          src='https://images.fineartamerica.com/images/artworkimages/medium/2/galaxy-cat-olga-shvartsur-transparent.png'
          alt=''
        />
      </ImageWrapper>
      <Form onSubmit={onSubmit}>
        <Input
          type='email'
          name='email'
          placeholder='e-mail'
          onChange={handleFormChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='contraseña'
          onChange={handleFormChange}
        />
        <Submit
          type='submit'
          value='iniciar sesión'
          onChange={handleFormChange}
        />
        <Paragraph>
          ¿Aún no tienes una cuenta? <br />{' '}
          <Link to='/signin'>
            <span>Registrate aquí</span>
          </Link>
        </Paragraph>
      </Form>
    </>
  )
}
