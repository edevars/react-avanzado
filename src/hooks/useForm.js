import { useState } from 'react'

export const useForm = fields => {
  const [form, useForm] = useState(fields)

  const handleFormChange = event => {
    useForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return [form, handleFormChange]
}
