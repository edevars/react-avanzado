import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Category } from './Category'

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.li`
  padding: 0 8px;
`

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData () {
      const response = await window.fetch(
        'https://petgram-server-alpha.now.sh/categories'
      )
      const data = await response.json()
      setCategories(data)
    }

    fetchData()
  }, [])

  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
