import React from 'react'

const Transcribing = (props) => {
    const {downloading} = props
  return (
    <main className='flex-1 p-4 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center justify-center pb-20 w-fit max-w-full mx-auto'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl text-blue-400 bold'>Transcribing</h1>
            <p className='font-semibold text-lg mb-4 text-slate-600'>{!downloading ? 'warming up cylinders' : 'core cylinders enganged'}</p>
            <div className='flex flex-col gap-4'>    
                {[0,1,2].map(val => {
                    return(<div key={val} className={'rounded-full h-2 bg-slate-400 loading ' + `loading${val}`}></div>)             
                })}
            </div>
        </div>
    </main>
  ) 
}
export default Transcribing