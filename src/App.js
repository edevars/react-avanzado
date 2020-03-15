import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './Components/General/Logo'
import { Home } from './pages/home'
import { Detail } from './pages/Detail'
import { NavBar } from './Components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { SignIn } from './pages/SignIn'
import { Consumer } from './Context'
import { ToastContainer } from 'react-toastify'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
              <SignIn path='/signin' />
            </Router>
          )}
      </Consumer>
      <NavBar />
    </>
  )
}
