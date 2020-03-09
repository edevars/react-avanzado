import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './Components/General/Logo'
import { ListOfCategories } from './Components/ListOfCategories'
import { ListOfPhotoCards } from './Containers/ListOfPhotoCards'
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
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  )
}
