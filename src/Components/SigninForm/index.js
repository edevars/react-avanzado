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

export const SigninForm = ({ onSubmit, error, disabled }) => {
  const [form, handleFormChange] = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(form)
  }

  useEffect(() => {
    toast.error(error)
  }, [error])

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
            ¿Ya tienes una cuenta? <br />{' '}
            <Link to='/favs'>
              <span>Inicia sesión aquí</span>
            </Link>
          </Paragraph>
        </Form>
      )}
    </>
  )
}
