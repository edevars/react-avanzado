import React from 'react'
import { Consumer } from '../Context'
import { LoginForm } from '../Components/LoginForm'

export const NotRegisteredUser = () => (
  <Consumer>
    {({ activateAuth }) => <LoginForm onSubmit={activateAuth} />}
  </Consumer>
)
