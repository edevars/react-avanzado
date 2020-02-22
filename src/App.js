import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './Components/Logo'
import { ListOfCategories } from './Components/ListOfCategories'
import { ListOfPhotoCards } from './Components/ListOfPhotoCards'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
