import React from 'react'
import Button2 from './Button2'
import Cards from './Cards'
import { FaXTwitter } from "react-icons/fa6";


function Projects() {

    const followData = [
        {},
        {}
    ]

  return (
    <div className='w-screen min-h-screen bg-white py-[7vw]'>
      <div className='masker font-LeagueGothic-Regular font-extrabold leading-none uppercase text-center text-[8vw] tracking-tighter'>
        <h1>welcome to the</h1>
        <h1>projects section</h1>
      </div>
      <div className='flex justify-center gap-[3vw]'>
        {followData.map((items, index) => <Button2 />)}
      </div>
      <div className='flex justify-center gap-[3vw] pt-[3vw] px-[7vw] pb-[2vw]'>
        {followData.map((items, index) => <Cards />)}
      </div>
      <div className='flex justify-center gap-[3vw] pt-[3vw] px-[7vw] pb-[2vw]'>
        {followData.map((items, index) => <Cards />)}
      </div>
      <div className='flex justify-center'>
        <span className='flex leading-none justify-center gap-3 w-[50vw] border-[6px] font-LeagueSpartan-Black uppercase text-3xl bg-[#F5B8D4] rounded-2xl border-black py-5 px shadow-xl drop-shadow-sm shadow-black'>
            <h1>Want to see more of my amazing projects</h1>
        </span>
      </div>
    </div>
  )
}

export default Projects
