import React from 'react'
import { Consumer } from '../Context'
import { UserForm } from '../Components/UserForm'

export const NotRegisteredUser = () => (
  <Consumer>
    {({ activateAuth }) => <UserForm onSubmit={activateAuth} />}
  </Consumer>
)
