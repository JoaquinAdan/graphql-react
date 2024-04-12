// import { useEffect } from 'react'
import './App.css'
import { PersonForm } from './PersonForm'
import Persons from './Persons'
import { ALL_PERSONS } from './graphql/queries'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client'

function App() {
  const { data, loading, error } = useQuery(ALL_PERSONS)

  if (error) return <span style='color: red'>{error}</span>
  return (
    <div>
      <img src={viteLogo} className='logo' alt='Vite logo' />
      {loading ? <p>Loading...</p> : <Persons persons={data?.allPersons} />}
      <PersonForm />
    </div>
  )
}

export default App
