import React, { createContext, useState } from 'react'
const { Provider: ContextProvider, Consumer } = createContext()

const Provider = ({ children }) => {
  const [isAuth, setAuth] = useState(() => window.sessionStorage.getItem('token'))
  const value = {
    isAuth,
    activateAuth: (token) => {
      setAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  return <ContextProvider value={value}>{children}</ContextProvider>
}

export { Provider, Consumer }
