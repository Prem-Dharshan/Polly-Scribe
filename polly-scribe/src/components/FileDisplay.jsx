import React from 'react'

const FileDisplay = (props) => {
    const {handleAudioReset, file, audioStream} = props
  return (
    <main className='flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center justify-center pb-20 w-fit max-w-full mx-auto'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your 
        <span className='text-blue-400 bold'>File</span></h1>
        <div className='flex flex-col text-left mx-auto mb-7'>
            <h2 className='font-semibold text-2xl my-1'>Name</h2>
            <div className='flex items-center gap-2'>
                <i className="fa-solid fa-file-audio text-2xl"></i>
                <p className='text-slate-400 text-lg'>{file ? file.name : 'Recorded Custom Audio'}</p>
            </div>
        </div>
        <div className='flex justify-between items-center gap-96'>
            <button onClick={handleAudioReset} className='text-2xl text-slate-400 hover:text-blue-400'>Reset</button>
            <button className='flex gap-2 items-center text-xl text-slate-500 specialBtn rounded-xl px-4 py-2 hover:text-blue-400'>
                <p>Transcribe</p>
                <i class="fa-solid fa-pencil"></i>
            </button>
        </div>
    </main>
  )
}
export default FileDisplay