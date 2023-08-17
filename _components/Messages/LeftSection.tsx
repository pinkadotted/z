import React from 'react'
import LeftHeader from './LeftHeader'
import LeftCard from './LeftCard'

const LeftSection = () => {
  return (
    <div>
      <div className="flex sticky top-0 bg-white bg-opacity-60 backdrop-blur-sm z-10">
        <LeftHeader />
      </div >
      <div className="divide-y divide-blue-200">
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      </div>
    </div>
  )
}

export default LeftSection