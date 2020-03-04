import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './Components/General/Logo'
import { ListOfCategories } from './Components/ListOfCategories'
import { ListOfPhotoCards } from './Components/containers/ListOfPhotoCards'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
