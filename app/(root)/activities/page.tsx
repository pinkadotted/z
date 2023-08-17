import FollowCard from '@/_components/Cards/FollowCard'
import LikeCard from '@/_components/Cards/LikeCard'
import TagCard from '@/_components/Cards/TagCard'
import RetweetCard from '@/_components/Cards/RetweetCard'
import Header from '@/_components/Header'
import TweetCard from '@/_components/TweetCard'
import React from 'react'

const text = "Hello this is Andrew Alfred the screaming sun and it's my first time using Z."
const longtext = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sed similique quod cumque, voluptates obcaecati. Architecto corporis rem accusantium placeat nobis minima, hic expedita dolores, mollitia exercitationem corrupti voluptatem dicta? "

const page = () => {
  return (
    <div>
      <Header route="activities"/>
      <div className='divide-y divide-blue-200'>
      <FollowCard />
      <RetweetCard text={text}/>
      <RetweetCard text={longtext}/>
      <LikeCard text={text}/>
      <TagCard text={text}/>
      <FollowCard />
      <RetweetCard text={text}/>
      <RetweetCard text={longtext}/>
      <LikeCard text={text}/>
      <TagCard text={text}/>
      <FollowCard />
      <RetweetCard text={text}/>
      <RetweetCard text={longtext}/>
      <LikeCard text={text}/>
      <TagCard text={text}/>
      </div>
    </div>
  )
}

export default page