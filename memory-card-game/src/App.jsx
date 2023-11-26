import { useState } from 'react'
import LoadingComponent from './Loading'
import CardsComponent from './Cards'
import styled from 'styled-components'
import gamevid from './assets/gamevid.mp4'
import { ScoreProvider } from './scoreContext'
import { ScoreDisplay } from './scoreDisplay'


const backgroundVideo = styled.video`
position: fixed;
right: 0;
bottom: 0;
min-width: 100%;
min-height: 100%;
z-index: -1;
`



function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }
  , 30000)


  

  if (!loading) {
    return (
      <>
    <ScoreProvider>
      <div className='video-container'>
        <video autoPlay loop className='video'><source src={gamevid} type='video/mp4' /></video>
      </div>
      <div className='container'>
        <div className='cards-container'>
          <CardsComponent />
        </div>
        <div className='score-display'>
          <ScoreDisplay />
        </div>
      </div>
    </ScoreProvider>
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
