import { motion } from 'motion/react'
import React from 'react'

function SocialLinks({items}) {
  return (
    <motion.div initial={{x: 0}} animate={{ x: "100%" }} transition={{repeat: Infinity, ease: 'linear', duration:"2"}} className='w-[10vw] h-[10vw] text-[#FE0000] bg-black flex justify-center mr-2 items-center flex-shrink-0'>
      <a href="#">{items.logo}</a>
    </motion.div>
  )
}

export default SocialLinks
