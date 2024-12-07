import React from 'react'

const HomePage = (props) => {
  const {setAudioStream, setFile} = props
  return (
    <main className='flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center justify-center pb-20'>
      <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Polly<span className='text-blue-400 bold'>Scribe</span></h1>
      <h3 className='text-slate-600 text-xl md:text-xl font-medium tracking-wide'>Record 
        <span className='text-blue-400'> &rarr; </span>
         Transcribe 
        <span className='text-blue-400'> &rarr; </span>
         Translate 
      </h3>
      <button className='flex items-center justify-between gap-4 mx-auto w-72 max-w-full my-4 text-slate-400 text-2xl font-medium specialBtn rounded-3xl px-4 py-2 hover:text-blue-400'>
        <p>Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
        <p className='text-slate-400 text-xl'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>Upload
          <input onChange={(e) => {
            const tempFile = e.target.files[0]
            setFile(tempFile)
        }}className='hidden' type="file" accept='.mp3,.wave' /></label> a mp3 file</p>
    </main>
  )
}

export default HomePage;