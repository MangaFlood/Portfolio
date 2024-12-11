import React from 'react'
import { FaXTwitter } from "react-icons/fa6";


function Button2() {
  return (
    <div>
        <div className='flex items-center leading-none justify-center gap-3 w-60 border-[6px] font-LeagueSpartan-Black uppercase text-3xl bg-[#F5B8D4] rounded-2xl border-black py-5 px shadow-xl drop-shadow-sm shadow-black'>
            <FaXTwitter className='text-3xl'/>
            <h1>Twitter</h1>
        </div>
    </div>
  )
}

export default Button2
