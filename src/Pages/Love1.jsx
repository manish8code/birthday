import React from 'react'
import BirthdayCard from '../Components/BirthdayCard'
import Wish from '../Components/Wish'
import MediaQuery from 'react-responsive'
import BirthdayWish from '../Components/BirthdayWish'

const Love1 = () => {
  return (
    <div  className='    '>
      <div className="h-dvh w-full p-1 "><Wish  /></div>
      <MediaQuery maxWidth={746}>
      <p className='text-center'>Tap on the card to reveal and tap outside to close it</p>
      </MediaQuery>
      
      <div className="mb-5 md:mb-9 flex flex-col items-center justify-center "><BirthdayCard/></div>
      
      <BirthdayWish/>
      
    </div>
  )
}

export default Love1
