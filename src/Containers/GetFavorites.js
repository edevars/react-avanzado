import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Loader } from '../Components/General/Loader'
import { ListOfFavs } from '../Components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loader />
  if (error) return <p>Error</p>

  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
