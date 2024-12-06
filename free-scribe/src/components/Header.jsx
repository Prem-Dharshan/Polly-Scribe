import React from 'react'

const Header = () =>  {
  return (
    <header className='flex p-5 items-center justify-between gap-4'>
          <h1 className='font-medium text-[22px]'>Polly<span className='text-blue-400 bold'>Scribe</span></h1>
          <button className='flex items-center gap-2 specialBtn rounded-3xl px-4 py-2 text-sm hover:text-blue-400'>
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
          </button>
    </header>
  )
}
export default Header;


