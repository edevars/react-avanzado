import React from 'react'
import { Submit } from './styles'

export const SubmitButton = ({ onSubmit, children }) => (
  <Submit onClick={onSubmit}>{children}</Submit>
)
