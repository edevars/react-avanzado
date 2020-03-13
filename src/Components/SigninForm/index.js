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

export const SigninForm = () => {
  const [form, useForm] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  })

  const handleFormChange = event => {
    useForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <Title>Crear cuenta</Title>
      <Subtitle>
        Se parte de la comunidad más grande de fanáticos de mascotas en el mundo
      </Subtitle>
      <ImageWrapper>
        <img
          src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-purple-french-bulldog-watercolor-art-print-painting-joanna-szmerdt.jpg'
          alt=''
        />
      </ImageWrapper>
      <Form>
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
        <Input
          type='password'
          name='repeatPassword'
          placeholder='repetir contraseña'
          onChange={handleFormChange}
        />
        <Submit
          type='submit'
          value='Registrarse'
          onChange={handleFormChange}
        />
        <Paragraph>
          ¿Ya tienes una cuenta? <br />{' '}
          <Link to='/favs'>
            <span>Inicia sesión aquí</span>
          </Link>
        </Paragraph>
      </Form>
    </>
  )
}
