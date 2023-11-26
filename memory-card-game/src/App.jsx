import { useState } from 'react'
import LoadingComponent from './Loading'
import CardsComponent from './Cards'

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }
  , 30000)

  if (!loading || loading) {
    return (
      <>
      <div className='container'>
        <div className='cards-container'>
          <CardsComponent />
        </div>
      </div>
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
