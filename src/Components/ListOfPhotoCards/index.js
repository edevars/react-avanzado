import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <List>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
