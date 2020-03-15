import React, { useEffect } from 'react'
import { Link } from '@reach/router'
import { toast } from 'react-toastify'
import { useForm } from '../../hooks/useForm'
import { Loader } from '../General/Loader'

import {
  Title,
  Subtitle,
  ImageWrapper,
  Form,
  Input,
  Submit,
  Paragraph
} from './styles'

export const LoginForm = ({ onSubmit, error, disabled }) => {
  const [form, handleFormChange] = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(form)
  }

  useEffect(() => {
    if (error) toast.error(error)
  }, [error])

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
      {disabled ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit}>
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
            value='Registrarse'
            onChange={handleFormChange}
          />
          <Paragraph>
            ¿No tienes una cuenta? <br />{' '}
            <Link to='/signin'>
              <span>Registrate aquí</span>
            </Link>
          </Paragraph>
        </Form>
      )}
    </>
  )
}
