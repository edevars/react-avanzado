import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 122px);
  background: linear-gradient(to left, #da22ff, #9733ee); 
`

const Title = styled.h1`
  font-size: 58px;
  max-width: 70%;
  margin: 0 auto;
  color: white;
`

export const NotFound = () => (
  <Wrapper>
    <Title>Lo sentimos 🐶, pero esta página no existe.</Title>
  </Wrapper>
)
