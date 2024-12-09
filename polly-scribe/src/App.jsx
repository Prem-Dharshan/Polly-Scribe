import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/Homepage'
import FileDisplay from './components/FileDisplay'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        {isAudioAvailable ? (
          <FileDisplay handleAudioReset={handleAudioReset} file = {file} audioStream = {setAudioStream}/>
        ) : (
          <HomePage setFile = {setFile} setAudioStream = {setAudioStream}/>
        )}
      </section> 
      <h1 className='text-5xl'>Hello</h1>
      <footer>

      </footer>
    </div>
  )
}

export default App
