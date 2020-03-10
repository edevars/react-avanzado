import React, { createContext, useState } from 'react'
const { Provider: ContextProvider, Consumer } = createContext()

const Provider = ({ children }) => {
  const [isAuth, setAuth] = useState(false)
  const value = {
    isAuth,
    activateAuth: () => {
      setAuth(true)
    }
  }

  return <ContextProvider value={value}>{children}</ContextProvider>
}

export { Provider, Consumer }
