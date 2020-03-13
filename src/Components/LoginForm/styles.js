import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  color: #000c41;
  font-size: 20px;
`

export const Subtitle = styled.h2`
  margin: 12px auto;
  max-width: 300px;
  text-align: center;
  color: #8f8f8f;
  font-weight: normal;
  font-size: 17px;
`

export const ImageWrapper = styled.div`
  display: flex;
  margin: 24px 0;
  justify-content: center;
  img {
    width: 160px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 300px;
  border: none;
  border: 1px solid #b6b6b6;
  margin-bottom: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
`

export const Submit = styled.input`
  width: 300px;
  border: none;
  margin-top: 16px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background: #ca00ca;
  color: white;
`

export const Paragraph = styled.p`
  margin: 20px auto;
  max-width: 300px;
  text-align: center;
  color: #8f8f8f;
  font-size: 17px;

  span{
      color: #0097d3;
  }
`
