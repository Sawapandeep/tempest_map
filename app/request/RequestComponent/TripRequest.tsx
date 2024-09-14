import Image from 'next/image'
import React from 'react'
import search from '@/public/Images/search.png';
const TripRequest = () => {
    return (
        <form className=' flex flex-row mt-5 mx-2 justify-center   p-2'>
            <input className="bg-black h-10 my-2 rounded-lg border border-[#F0ffff]" placeholder=" Your Location " type="text" />
            <input className="bg-black h-10 my-2 rounded-lg border border-[#F0ffff]" placeholder=" Your Destination" type="text" />
            <button className='bg-white rounded-3xl '><Image src={search} alt='search' className='w-10 h-10' /></button>

        </form>
    )
}

export default TripRequest