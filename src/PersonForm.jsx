import { useState } from 'react'
import useCreatePerson from './hooks/use-create-person'

export const PersonForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [age, setAge] = useState('')

  const [createPerson] = useCreatePerson()

  const handleSubmit = (e) => {
    e.preventDefault()
    createPerson({ variables: { name, phone, street, city, age: Number(age) } })
    setName('')
    setStreet('')
    setPhone('')
    setCity('')
    setAge('')
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder='Name' value={name} onChange={({ target }) => setName(target.value)} />
        </div>
        <div>
          <input placeholder='Phone' value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
        <div>
          <input placeholder='Street' value={street} onChange={({ target }) => setStreet(target.value)} />
        </div>
        <div>
          <input placeholder='City' value={city} onChange={({ target }) => setCity(target.value)} />
        </div>
        <div>
          <input placeholder='Age' type='number' value={age} onChange={({ target }) => setAge(target.value)} />
        </div>
        <button type='submit'>add!</button>
      </form>
    </div>
  )
}
