import React from 'react'
import LeftPage from './LeftPage'
import RightPage from './RightPage'

const Center = () => {
  return (
    <div className='h-screen flex flex-row gap-5 py-3 px-3'>
       <LeftPage />
       < RightPage />
    </div>
  )
}

export default Center