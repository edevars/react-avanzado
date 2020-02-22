import React, { useEffect, useState } from 'react'
import NProgress from 'nprogress'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData () {
      NProgress.start()
      const response = await window.fetch(
        'https://petgram-server-alpha.now.sh/categories'
      )
      const data = await response.json()
      NProgress.done()
      setCategories(data)
    }

    fetchData()
  }, [])

  return { categories }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories } = useCategoriesData()

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
