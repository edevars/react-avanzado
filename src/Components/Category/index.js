import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE =
  'https://cdn6.aptoide.com/imgs/8/9/e/89e4498f686dd1ecb7aac9b7fddb754c_icon.png?w=256'
export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} alt='pet' />
    {emoji}
  </Link>
)
