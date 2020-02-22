import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ListOfCategories } from './Components/ListOfCategories'
import { ListOfPhotoCards } from './Components/ListOfPhotoCards'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
