import React from 'react'
import Image from "next/image";

const TweetCard = () => {
  return (
    <div className='flex border-2 border-indigo-400 px-6 py-2'>
        
        <div className='flex flex-col w-1/3 border-2 border-sky-200 justify-between'>
            <div>
            <div className='flex border border-black-400'>
                <Image src="/sun-profile.jpg" alt="sun-profile" width={80} height={80} className='rounded-full'/>
                <div className='flex flex-col justify-center p-4'>
                    <strong>Andrew Alfred</strong>
                    <span className='text-slate-500'>@screamingsun</span>
                </div>
            </div>
            <p className='flex border border-black-400 p-4'>
                Hello this is Andrew Alfred the screaming sun and it's my first time using Z. Hope to make new friends and share new memories with everyone. Cheers. x
            </p>
            </div>
            <div className='flex justify-around align-self-end border border-purple-400'>
                <div>
                    Comment
                </div>
                <div>
                    Retweet
                </div>
                <div>
                    Like
                </div>
            </div>
        </div>
        <div className='border-2 border-red-300 w-2/3 m-2 grid grid-cols-2 aspect-[4/3]'>
            <div className='border-2 border-orange-500 w-full h-full'>
            </div>
            <div className='border-2 border-orange-500 w-full h-full'>
            </div>
            <div className='border-2 border-orange-500 w-full h-full'>
            </div>
            <div className='border-2 border-orange-500 w-full h-full'>
            </div>
        </div>
    </div>
  )
}

export default TweetCard