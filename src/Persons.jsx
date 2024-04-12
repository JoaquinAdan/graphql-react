import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { FIND_PERSON } from './graphql/queries'

const Persons = ({ persons }) => {
  const [person, setPerson] = useState(null)

  const [getPerson, result] = useLazyQuery(FIND_PERSON)
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
        <div key={id} onClick={() => showPerson(person.name)}>
          <p>
            {person.name} {person.phone}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Persons
