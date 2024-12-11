import React from 'react'

function NavBar() {
  return (
    <nav className='w-full mx-auto px-32 py-5'>
        <div className='flex md:gap-3 flex-col md:flex-row font-LeagueSpartan-black font-extrabold uppercase leading-[1.1] text-[5vw] md:text-4xl lg:text-5xl text-nowrap'>
            <span>code in a </span>
            <span className='text-nowrap'>designers world</span>
        </div>
    </nav>
  )
}

export default NavBar