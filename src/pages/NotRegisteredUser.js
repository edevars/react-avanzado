import React from 'react'
import { Consumer } from '../Context'

export const NotRegisteredUser = () => (
  <Consumer>
    {({ isAuth, activateAuth }) => {
      console.log(isAuth)
      return (
        <form onSubmit={activateAuth}>
          <input type='submit' value='iniciar sesión' />
        </form>
      )
    }}
  </Consumer>
)
