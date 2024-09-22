import Image from 'next/image'
import React from 'react'
import search from '@/public/Images/search.png';
const TripRequest = () => {
    return (
        <form className=' flex flex-col justify-center items-center mt-5 mx-auto  p-2 '>
            <input className="bg-black h-10 my-2 rounded-3xl border border-[#F0ffff]" placeholder=" Your Location " />
            <input className="bg-black h-10 my-2 rounded-3xl border border-[#F0ffff]" placeholder=" Your Destination" />
            <div className="flex justify-center items-center"><button className='  '><Image src={search} alt='search' className='w-10 h-10 bg-white rounded-full' /></button></div>


        </form>
    )
}

export default TripRequest