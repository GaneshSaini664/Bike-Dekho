import React from 'react'
import BikeCard from './BikeCard'


const bike = [
  {
      img: 'https://i.pinimg.com/736x/0e/69/3f/0e693f68feea0c901f30a11fb6fb8b13.jpg',
      name: 'Royal Enfield',
      company : 'https://www.royalenfield.com/in/en/home/'
  },
  {
    img: 'https://images.seeklogo.com/logo-png/19/1/triumph-logo-png_seeklogo-192849.png',
    name: 'Trimph ',
    company : 'https://www.triumphmotorcycles.in/'
  },
  {
    img: 'https://www.campaignindia.in/media/CIN/20160517213105003284_Hero_460.gif',
    name: 'Hero',
    company : 'https://www.heromotocorp.com/en-in.html'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AJpoiGjTzQtp5VT3ttYre6hyOwrNGAlF0w&s',
    name: 'Honda',
    company : 'https://www.honda2wheelersindia.com/'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQlB0gk3SYAZVDREg48L486-CidQpVA35Lw&s',
    name: 'Jawa',
    company : 'https://www.jawayezdimotorcycles.com/'
  },
  {
    img: 'https://blog.logomaster.ai/hs-fs/hubfs/bmw-logo-1997.jpg?width=672&height=454&name=bmw-logo-1997.jpg',
    name: 'BMW',
    company: 'https://www.bmw.in/en/index.html'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/020/336/393/non_2x/tvs-logo-tvs-icon-transparent-png-free-vector.jpg',
    name: 'TVS',
    company: 'https://www.tvsmotor.com/'
  },
  {
    img: 'https://www.shutterstock.com/image-vector/vinnytsia-ukraine-december-23-2023-260nw-2404229791.jpg',
    name: 'Suzuki',
    company: 'https://www.suzukimotorcycle.co.in/'
  },
  {
    img: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/news/th_black_river_mark.jpg',
    name: 'Kawasaki',
    company: 'https://www.kawasaki-india.com/'
  },
  {
    img: 'https://cdn.room58.com/2024/04/26/12cd2c86902466686f4a9e91b60f869b_0a505b62e7b3995e.png',
    name: 'Harley Davidson',
    company: 'https://www.harley-davidson.com/in/en/index.html'
  }
]

const Section3 = (props) => {
  return (
    <div className='h-screen bg-[#F8FAF9] p-2 flex gap-2 flex-wrap'>
       {bike.map(function(elem,idx){
           return <div>
                <BikeCard key={idx} abc = {elem.img} ab = {elem.name} bc = {elem.company}/>
           </div>
       })}
    </div>
  )
}

export default Section3