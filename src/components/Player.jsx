import React, { useContext } from 'react';
import { FaPlay, FaPause, FaBackward } from 'react-icons/fa';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import { PlayerContext } from '../context/PlayerContext';

function Player() {
  const {
    seekbg,
    seekBar,
    playing,
    start,
    stop,
    previous,
    next,
    sideBrPlay,
  } = useContext(PlayerContext);

  return (
    <div className=' absolute w-full h-full text-2xl bottom-[-70%]'>
      <div className='w-full  rounded-xl flex p-2'>
        <div className='w-full flex flex-col items-center gap-3 p-3'>
          {/* Player Controls */}
          <div className='flex gap-3'>
            {/* Previous Button */}
            <button
              onClick={previous}
              style={{ transitionDuration: '.3s' }}
              className='w-[3vw] h-[3vw] flex justify-center items-center border-8 border-black bg-[#f5b8d5]  rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)] hover:bg-yellow-500'
            >
              <FaBackward />
            </button>

            {/* Play/Pause Button */}
            {playing ? (
              <button
                onClick={stop}
                style={{ transitionDuration: '.3s' }}
                className='w-[5vw] h-[5vw] flex justify-center items-center border-8 border-black bg-[#F5B8D4]  rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)] hover:bg-yellow-500'
              >
                <FaPause />
              </button>
            ) : (
              <button
                onClick={start}
                style={{ transitionDuration: '.3s' }}
                className='w-[5vw] h-[5vw] flex justify-center items-center border-8 border-black bg-[#F5B8D4]  rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)] hover:bg-yellow-500'
              >
                <FaPlay />
              </button>
            )}

            {/* Next Button */}
            <button
              onClick={next}
              style={{ transitionDuration: '.3s' }}
              className='w-[3vw] h-[3vw] flex justify-center items-center border-8 border-black bg-[#F5B8D4]  rounded-full drop-shadow-[2px_2px_5px_rgba(0,0,0,0.35)] hover:scale-125 hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.95)] hover:bg-yellow-500'
            >
              <TbPlayerTrackNextFilled />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
