// import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { PersonForm } from './PersonForm'
import Persons from './Persons'
import usePersons from './hooks/use-persons'
import viteLogo from '/vite.svg'
import Notify from './Notify'

function App() {
  const { data, loading, error } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  const notifyError = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }
  return (
    <div>
      <img src={viteLogo} className='logo' alt='Vite logo' />
      {loading ? <p>Loading...</p> : <Persons persons={data?.allPersons} />}
      <PersonForm notifyError={notifyError} />
      <Notify errorMessage={errorMessage} />
    </div>
  )
}

export default App
