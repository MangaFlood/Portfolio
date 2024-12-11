import React from 'react'
import Button from './Button';


function StickyNav() {

    const IconData = [
        { icon: '', page: '' },
        { icon: '', page: '' },
        { icon: '', page: '' },
        { icon: '', page: '' },
    ]



  return (
    <div className='w-full flex z-[99] justify-between p-4 fixed top-0'>
        <div></div>
        <div className='flex gap-6'>
            {IconData.map((items, index) => <Button />)}
        </div>
    </div>
  )
}

export default StickyNav
