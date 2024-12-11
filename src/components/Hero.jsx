import React, { useContext } from 'react'
import NavBar from './NavBar'
import Marque from './Marque'
import Player from './Player'
import { PlayerContext } from '../context/PlayerContext';





function Hero() {

    const {audioRef, track} = useContext(PlayerContext);


  return (
    <div className='bg-[#FE0000] h-[95vh] w-screen rounded-b-[50px]'>
        <NavBar />
        <Marque />
        <div className='font-LeagueGothic-Regular font-extrabold flex px-5 py-4 text-[26vw] tracking-tighter leading-none justify-between items-center'>
            <h1 className='mr-6'>CO</h1>
            <div className='relative w-[20vw] h-[25vw] mt-6 bg-[#F5B8D4] border-8 border-black rounded-3xl'>
                <img className='w-full h-full rounded-2xl object-cover' src="public/Images/Gradient Blur gifs - Find & Share on GIPHY.gif" alt="" />
                <div className='absolute top-0 w-full h-full rounded-3xl'>
                    <div className='w-full h-[70%] p-4 rounded- overflow-hidden'>
                        <img className='w-full h-full object-cover rounded-2xl' src="./public/Images/download.gif" alt="" />
                    </div>
                    <Player />
                    <audio ref={audioRef} preload='auto' src={track.file}></audio>
                </div>
            </div>
            <h1>DE</h1>
        </div>
        <div className='flex justify-between pt-1 px-[7.5vw] font-LeagueSpartan-Bold font-extrabold uppercase leading-none text-[6vw] md:text-5xl'>
            <div>
                <div>frontend</div>
                <div>developer</div>
            </div>
            <div>
                <div>A y u s h !!</div>
                <div>Prajapati</div>
            </div>
        </div>

    </div>
  )
}

export default Hero