import React from 'react'
import { navigate } from '@reach/router'
import { SigninForm } from '../Components/SigninForm'
import { RegisterMutation } from '../Containers/RegisterMutation'
import { Consumer } from '../Context'

export const SignIn = () => (
  <Consumer>
    {({ activateAuth }) => (
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(() => {
              activateAuth()
              navigate('/favs')
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema.'

          return (
            <SigninForm
              onSubmit={onSubmit}
              error={errorMsg}
              disabled={loading}
            />
          )
        }}
      </RegisterMutation>
    )}
  </Consumer>
)
