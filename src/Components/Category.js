import React from 'react'
import styled from 'styled-components'

const DEFAULT_IMAGE =
  'https://cdn6.aptoide.com/imgs/8/9/e/89e4498f686dd1ecb7aac9b7fddb754c_icon.png?w=256'

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='pet' />
    {emoji}
  </Anchor>
)
