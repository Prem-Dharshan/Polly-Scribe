import React, { useState } from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

const Information = () => {
    const [tab, setTab] = useState('transcription')
  return (
    <main className='flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20 w-fit max-w-full mx-auto'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl mb-4'>Your<span className='text-blue-400 bold'> Transcription</span></h1>
      <div className='grid grid-cols-2 w-96 mx-auto rounded-full overflow-hidden items-center border-solid boxShadow'>
        <button onClick={() => {
            setTab('transcription')
        }}className={'px-4 duration-200 py-1 text-2xl ' + (tab === 'transcription' ? 'bg-blue-300 text-white' : 'text-blue-400 hover:text-blue-500')}>
                  Transcription
        </button>
        <button onClick={() => {
            setTab('translation')
        }}className={'px-4 duration-200 py-1 text-2xl ' + (tab === 'translation' ? 'bg-blue-300 text-white' : 'text-blue-400 hover:text-blue-500')}>
                  Translation
        </button>
      </div>
      {tab === 'transcription' ? (
        <Transcription />
      ) : (
        <Translation />
      )}
    </main>
  )
}

export default Information
