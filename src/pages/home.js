import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from '../Containers/ListOfPhotoCards'
import { Layout } from '../Components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='Tu app de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
