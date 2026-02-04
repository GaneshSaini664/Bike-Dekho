import React from 'react'
import { Link } from 'react-router-dom'

const RightCard = (props) => {
    return (
        <div className='h-[400px] w-[230px] flex flex-col justify-between rounded-3xl relative overflow-hidden shrink-0 '>

            <img className='h-[400px]  object-center object-cover ' src={props.CardImg} alt='card img' />

              <div className='absolute py-3 px-2 flex flex-col justify-between h-[400px]'>

                <div className='rounded-full bg-[#ffff] h-10 w-10 flex items-center justify-center '>
                    <h1>{props.id+1}</h1>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className=' h-[100px] text-white text-shadow-2xl'>
                        <p>
                            
                        </p>
                    </div>

                    <a href={props.cardUrl}
                    target='_blank'
          rel='noopener noreferrer'

                    ><div className='border h-10 w-35 flex items-center justify-center rounded-4xl bg-neutral-50 active:scale-95 cursor-pointer font-semibold'>
                        {props.CardBtn}
                    </div>
                    </a>
                </div>

              </div>

           
        </div>
    )
}

export default RightCard