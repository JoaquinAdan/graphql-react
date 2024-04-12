import { useEffect, useState } from 'react'
import useEditNumber from './hooks/use-edit-number'

export const PhoneForm = ({ name }) => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const [editNumber, result] = useEditNumber()

  const handleSubmit = (e) => {
    e.preventDefault()
    editNumber({ variables: { name, phone: phoneNumber } })
  }
  useEffect(() => {
    if (result.data) {
      setPhoneNumber('')
    }
  }, [result.data])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder='New phone' value={phoneNumber} onChange={({ target }) => setPhoneNumber(target.value)} />
        </div>
        <button type='submit'>Change phone!</button>
      </form>
    </div>
  )
}
