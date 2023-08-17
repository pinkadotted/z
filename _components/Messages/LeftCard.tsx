'use client'
import { Avatar, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { IconContext } from 'react-icons'
import { FiMoreHorizontal } from 'react-icons/fi'

const LeftCard = () => {
  return (
    <div className='flex h-20 items-center justify-between px-3 border-2 border-green-500'>
      {/* Avatar */}
      <div>
      <Avatar
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />
      </div>
      {/* Main Content */}
      <div className='flex flex-col '>
        <div className='flex'>
            <strong className='px-2'>VViolet</strong>
            <p className='px-1 font-semibold text-slate-400 border-2 border-red-500'>@wanderinmarchen</p>
            <p className='px-2 text-slate-400'>Jun 6</p>
        </div>
        <div>
          <p className='px-2'>This is the tweet content!</p>
        </div>
      </div>
      {/* More button */}
      <div>
      <IconButton
            onClick={() => console.log("clicked like button!")}
            aria-label="New Message"
            icon={
              <IconContext.Provider value={{ size: "20" }}>
              <FiMoreHorizontal />
            </IconContext.Provider>
            }
            size="lg"
            isRound={true}
            _hover={{
              color: "gray.500",
            }}
            variant={"outline"}
            border={"none"}
          />
      </div>
    </div>
  )
}

export default LeftCard