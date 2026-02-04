import React from 'react'
import HeroText from './HeroText'
import Icon from './Icon'

const LeftPageContent = () => {
  return (
    <div className='flex flex-col h-full justify-between py-4 px-3'>
        < HeroText />
        < Icon />
    </div>
  )
}

export default LeftPageContent