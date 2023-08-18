import React from 'react'

const LeftBubble = () => {
  return (
    <div className='flex justify-start px-2 py-4 items-center'>
            <div className='flex flex-col w-fit h-fit max-w-sm py-3 items-between bg-slate-200 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl justify-center'>
                 <p className="px-3 max-w-sm">Hello! hope you are doing great</p>
                 <p className='text-xs justify-self-end w-full max-w-sm px-3'>2.04pm</p>
            </div>
    </div>
  )
}

export default LeftBubble