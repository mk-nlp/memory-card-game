import { useState } from 'react'
import LoadingComponent from './Loading'

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }
  , 10000)

  if (!loading) {
    return (
      <>
      <h1>App</h1>
      </>
    )
  }

  return (
    <>
    <LoadingComponent />
    </>
  )
}

export default App
