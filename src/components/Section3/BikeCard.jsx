import { Link } from 'lucide-react'
import React from 'react'

const BikeCard = (props) => {
  return (
    <div className='h-70 w-60 bg-[#D9D3C6] flex flex-col justify-around items-center rounded'>
        <div className='h-45 w-55 rounded bg-pink-200'>
            <img src={props.abc} alt={props.ab} className='h-full w-full object-cover rounded'/>
        </div>
        <div className=''>
            <h1 className='text-lg font-semibold text-black'>{props.ab}</h1>
        </div>
        <div>
            <button className='bg-[#788978] text-white p-2 w-30 rounded-lg active:scale-95'><a href={props.bc}>Buy Now</a></button>
        </div>
    </div>
  )
}

export default BikeCard