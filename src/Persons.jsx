import { useEffect, useState } from 'react'
import usePerson from './hooks/use-person'
import { PhoneForm } from './PhoneForm'

const Persons = ({ persons }) => {
  const [person, setPerson] = useState(null)
  const [getPerson, result] = usePerson()

  const showPerson = (name) => getPerson({ variables: { nameToSearch: name } })

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson)
    }
  }, [result])

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <div>
          {person.address.street} - {person.address.city}
        </div>
        <button onClick={() => setPerson(null)}>close</button>
      </div>
    )
  }
  if (persons === null) return null
  return (
    <div>
      <h2>Persons</h2>
      {persons?.map((person, id) => (
        <div key={id} style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }}>
          <p onClick={() => showPerson(person.name)}>
            {person.name} {person.phone}
          </p>
          <PhoneForm name={person.name} />
        </div>
      ))}
    </div>
  )
}

export default Persons
