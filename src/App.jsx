// import { useEffect } from 'react'
import './App.css'
import { PersonForm } from './PersonForm'
import Persons from './Persons'
import usePersons from './hooks/use-persons'
import viteLogo from '/vite.svg'

function App() {
  const { data, loading, error } = usePersons()

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
