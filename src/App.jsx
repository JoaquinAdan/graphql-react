import { useEffect } from 'react'
import './App.css'
import viteLogo from '/vite.svg'

function App() {
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query{
            allPersons {
              name
              phone
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div>
        <img src={viteLogo} className='logo' alt='Vite logo' />
        <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
