import React from 'react'
import { FavsWithQuery } from '../Containers/GetFavorites'
import { Layout } from '../Components/Layout'

export const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
