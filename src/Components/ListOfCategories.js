import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Category } from './Category'
import { bounceDown } from '../styles/animation'

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  ${props =>
    props.fixed &&
    css`
      ${bounceDown({ time: '700ms', type: 'ease-in' })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      transform: scale(0.5);
      z-index: 1;
      top: 0px;
    `};
`

const getCategoriesData = () => {
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

  return { categories }
}

const Item = styled.li`
  padding: 0 8px;
`

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories } = getCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
  })

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
