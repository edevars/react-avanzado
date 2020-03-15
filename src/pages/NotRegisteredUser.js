import React from 'react'
import { Consumer } from '../Context'
import { navigate } from '@reach/router'
import { LoginForm } from '../Components/LoginForm'
import { LoginMutation } from '../Containers/LoginMutation'

export const NotRegisteredUser = () => (
  <Consumer>
    {({ activateAuth }) => (
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
              navigate('/favs')
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema.'

          return (
            <LoginForm
              onSubmit={onSubmit}
              error={errorMsg}
              disabled={loading}
            />
          )
        }}
      </LoginMutation>
    )}
  </Consumer>
)
