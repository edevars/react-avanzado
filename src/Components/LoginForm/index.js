import React from 'react'
import { Link } from '@reach/router'
import { useForm } from '../../hooks/useForm'
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
  // eslint-disable-next-line no-unused-vars
  const [form, handleFormChange] = useForm({
    email: '',
    password: ''
  })
  return (
    <>
      <Title>Iniciar sesión</Title>
      <Subtitle>Disfruta de tus mascotas favoritas ahora mismo</Subtitle>
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
          ¿Aún no tienes una cuenta? <br />
          <Link to='/signin'>
            <span>Regístrate aquí</span>
          </Link>
        </Paragraph>
      </Form>
    </>
  )
}
