import Image from 'next/image'
import React from 'react'

const Slide3 = () => {

    return (
        <div className='h-[300px] w-full relative overflow-hidden bg-white shadow-lg group rounded-md'>
            <Image src="/images/slide3.png" width={450} height={100} className='absolute right-5 top-8 group-hover:scale-105 transition-all' alt='Hero' />
            <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg: p-11'>
                <h2 className='bg-green-1 max-w-[270px] rounded py-2 text-center text-base font-normal text-dark-1'>
                    Voice Calling API
                </h2>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-extrabold lg:text-6xl text-dark-3'>
                        Meeting Rooms & Chat
                    </h1>
                    <p className='text-lg font-medium text-gray-500'>
                        You can create your own private meeting and chat with others.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide3