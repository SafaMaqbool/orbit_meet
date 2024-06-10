import Image from 'next/image'
import React from 'react'

const Instructor = () => {
    return (
        <div className='flex items-center justify-center flex-col mb-20'>
            <h1 className='text-3xl font-bold text-center text-black mb-10'>Project Mentor & Students</h1>
            <div className='flex flex-col gap-2 items-center justify-center relative group'>
                <Image src="/images/gulraiz.jpg" width={400} height={400} alt='Instructor' className='border-8 border-white rounded-md shadow-lg group-hover:scale-[1.01] transition-all group-hover:border-yellow-1' />
                <h1 className='text-3xl text-white bg-dark-1 rounded-md shadow-md p-3 absolute -bottom-7'>
                    Engr. Gulraeez Gulshan
                </h1>
            </div>

        </div>
    )
}

export default Instructor