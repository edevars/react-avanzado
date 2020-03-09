import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from '../Containers/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
