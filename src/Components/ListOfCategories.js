import React from 'react'
import styled from 'styled-components'
import { Category } from './Category'
import { categories } from '../../api/db.json'

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

export const ListOfCategories = () => (
  <List>
    {categories.map(category => (
      <Item key={category.id}>
        <Category {...category} />
      </Item>
    ))}
  </List>
)
