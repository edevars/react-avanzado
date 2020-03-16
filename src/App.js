import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './Components/General/Logo'
import { Home } from './pages/home'
import { Detail } from './pages/Detail'
import { NavBar } from './Components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { SignIn } from './pages/SignIn'
import { NotFound } from './pages/NotFound'
import { Context } from './Context'
import { ToastContainer } from 'react-toastify'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/signin' to='/' />}
        <SignIn path='/signin' />
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </>
  )
}
