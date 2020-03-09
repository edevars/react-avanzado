import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './Components/General/Logo'
import { Home } from './pages/home'
import { PhotoCardWithQuery } from './Containers/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router>
      )}
    </>
  )
}
