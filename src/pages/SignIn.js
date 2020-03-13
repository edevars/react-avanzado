import React from 'react'
import { navigate } from '@reach/router'
import { SigninForm } from '../Components/SigninForm'
import { RegisterMutation } from '../Containers/RegisterMutation'
import { Consumer } from '../Context'

export const SignIn = () => (
  <Consumer>
    {({ activateAuth }) => (
      <RegisterMutation>
        {register => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables })
              .then(() => {
                activateAuth()
                navigate('/favs')
              })
              .catch()
          }

          return <SigninForm onSubmit={onSubmit} />
        }}
      </RegisterMutation>
    )}
  </Consumer>
)
