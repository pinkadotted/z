import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const MessagePage = () => {
  return (
    <div className='flex border-2 border-red-500 '>
        <div className='w-2/5 border-2 border-green-500'>
        <LeftSection />
        </div>
        <div className='w-3/5 border-2 border-blue-500'>
        <RightSection />
        </div>
    </div>
  )
}

export default MessagePage