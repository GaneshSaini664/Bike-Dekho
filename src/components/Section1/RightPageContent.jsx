import React from 'react'
import RightCard from './RightCard'
import { Link } from 'react-router-dom'

const RightPageContent = () => {

  const cardFill = [
    {
      CardImg : 'https://preview.redd.it/hunter-350-v0-343gikcmtk5d1.jpeg?auto=webp&s=c6db47193ce6b20d456fc4790421bd502b003ec7',
      CardUrl : 'https://www.royalenfield.com/in/en/home/',
      CardButton : 'RoyalEnfield',
    },
    {
      CardImg : 'https://images.unsplash.com/photo-1712140489557-30897ad0592b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyaXVtcGglMjBtb3RvcmN5Y2xlfGVufDB8fDB8fHww',
      CardUrl : 'https://www.triumphmotorcycles.in/',
      CardButton : 'Trimph',
    },
    {
      CardImg : 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      CardUrl : 'https://www.ktmindia.com/',
      CardButton : 'KTM',
    },
    {
      CardImg : 'https://images.unsplash.com/photo-1664885765868-456486d200dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
      CardUrl : 'https://www.ducati.com/in/en/home',
      CardButton : 'Ducati',
    },
    {
      CardImg : 'https://images.unsplash.com/photo-1559289431-9f12ee08f8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D',
      CardUrl : 'https://www.harley-davidson.com/in/en/index.html',
      CardButton : 'Harley Davidson',
    },
  ]




  return (
    <div className='py-5 px-10 flex flex-row overflow-scroll gap-10 scrollbar'>
       {cardFill.map(function(elem, idx){
        return <div key={idx++}>
            < RightCard CardImg = {elem.CardImg} cardUrl = {elem.CardUrl} CardBtn = {elem.CardButton} cardIdx = {elem.CardIdx} id={idx}/>
          </div>
       })}
    </div>
  )
}

export default RightPageContent