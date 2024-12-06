import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        <HomePage />
      </section>
      <h1 className='text-5xl'>Hello</h1>
      <footer>

      </footer>
    </div>
  )
}

export default App
