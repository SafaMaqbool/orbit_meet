import Image from 'next/image'
import React from 'react'

const Slide2 = () => {
    const now = new Date();

    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
    
    return (
        <div className='h-[300px] w-full relative overflow-hidden bg-dark-1 shadow-lg group rounded-md'>
            <Image src="/images/slide2.png" width={500} height={100} className='absolute right-0 -top-10 group-hover:scale-105 transition-all' alt='Hero' />
            <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg: p-11'>
                <h2 className='bg-yellow-1 max-w-[270px] rounded py-2 text-center text-base font-normal text-dark-1'>
                    Voice Calling API
                </h2>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-extrabold lg:text-6xl text-dark-11'>
                        Feature Rich Experiece 
                    </h1>
                    <p className='text-xl font-medium text-gray-500'>
                        Like Telegram, WhatsApp, Zoom, Google Meet!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide2