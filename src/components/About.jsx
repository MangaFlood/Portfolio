import { motion } from 'motion/react';
import React from 'react';

function About() {
  return (
    <>
      <div className='w-screen min-h-screen relative bg-black shadow-[inset_0_0_150px_200px_rgba(0,0,0,0.9)] overflow-hidden'>
        <div className='flex pt-4 my-10 pb-3 border-y-8 text-9xl border-black bg-black text-white font-LeagueSpartan-Black hover:text-white font-bold leading-none uppercase text-nowrap overflow-hidden'>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
            <motion.div initial={{x: 0}} animate={{ x: "-100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"20"}} className='flex items-center'>
                <span className='px-5'>•</span><h1>fronend developer ayush prajapati</h1><span className='px-5'>•</span>
            </motion.div>
        </div>
        <div className='relative'>
          {/* Correct the video source path */}
          <video
            muted
            loop
            autoPlay
            className='w-full shadow-[inset_0_0_150px_50px_rgba(0,0,0,0.9)]' // Increased shadow depth
            src='/videos/pinterestdownloader.com-1733931486.818989.mp4'
          ></video>
          {/* Optional overlay div for additional styling */}
          <div className='absolute top-0 left-0 w-full h-full shadow-[inset_0_0_150px_200px_rgba(0,0,0,100)]'>
            <div className='w-full h-full bg-[#FE0000] absolute  top-[50%] rounded-full'></div>
          </div>
        </div>
      </div>
      <div className='w-screen font-LeagueSpartan-Black uppercase leading-none text-6xl text-center bg-[#FE0000] px-[7vw] py-[7vw] font-2 flex flex-col gap-[5vw]'>
        <h1>
          I don’t really remember what my life was like before this. Waking up at 6 a.m., leaving for college, bunking classes to study—it all feels like fragments of another reality. And yet, somehow, it all led me here.
        </h1>
        <h1>
          One thing I know, beyond the blur of my routine, is this: I’m here to break through the noise, to rise above the ordinary, and to carve ode and innovation.
        </h1>
        <h1>
          The old ways of stumbling through mediocrity? They’ve ruled for far too long. The tyranny of doubt and distraction? Its days are numbered.
        </h1>
        <h1>
          But this isn’t just about me—it’s about us. About finding freedom in creativity and joy in solving complex problems. A revolution is stirring, one line of code at a time.
        </h1>
        <h1>
          So here I am, standing on the edge of this transformation, ready to dive into the unknown. The change is happening now, and together, we’re about to rewrite the rules.
        </h1>
      </div>
    </>
  );
}

export default About;
