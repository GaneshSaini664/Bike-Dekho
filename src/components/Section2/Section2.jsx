import React from 'react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';



const Section2 = () => {
  return (
    
       <div className='h-screen flex justify-center items-center bg-gray-500/10 backdrop-blur-md p-6 '>
           <div className='h-100 w-200 bg-blue-300'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded">
                  <SwiperSlide > <img src='https://images.unsplash.com/photo-1508349661974-9927dbd8399c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' className='object-cover' /> Slide 1</SwiperSlide>
                       <SwiperSlide > <img src='https://images.unsplash.com/photo-1550966871-47324cfb6278?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='object-cover'/> Slide 2</SwiperSlide>
                       <SwiperSlide> <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" className='object-center'/>Slide 3</SwiperSlide>
                       <SwiperSlide> <img src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> Slide 4 </SwiperSlide>
                       <SwiperSlide> <img src='https://images.unsplash.com/photo-1650206748193-a7a970c833da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJveWFsJTIwZW5maWVsZHxlbnwwfHwwfHx8MA%3D%3D'className='' /> Slide 5 </SwiperSlide>
                       <SwiperSlide> <img src='https://images.unsplash.com/photo-1570306296747-f7bb428e4fe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D' className='object-center'/> Slide 6 </SwiperSlide>
                       <SwiperSlide> <img src='https://images.unsplash.com/photo-1656767323058-49cb61bfda4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9hZHN0ZXIlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D' className='object-center'/> Slide 7 </SwiperSlide>
                       <SwiperSlide> <img src='https://media.istockphoto.com/id/849321920/photo/old-custom-beautiful-cafe-racer-motorcycle-in-the-desert-at-sunset-or-sunrise.jpg?s=1024x1024&w=is&k=20&c=LzyDFo0DUt20-71KkL152kaG7ol84f5syXiHkcA62Xg='/> Slide 8 </SwiperSlide>
                       <SwiperSlide> <img src='https://plus.unsplash.com/premium_photo-1661963005592-182d602c6a3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D'className='object-center' /> Slide 9 </SwiperSlide>
                       
                </Swiper>
           </div>
       </div>
    
  )
}

export default Section2