import { logos } from '@/constants'
import React from 'react'
import LogoCard from './LogoCard'


const TechnologyList = () => {
    return (
        <div className='text-black  w-full flex flex-col gap-8 mb-28'>

            <h1 className='text-3xl font-bold text-center'>Technology Stack</h1>
            <div className='grid grid-cols-7 gap-4'>
                {
                    logos.map((item, index) => (
                        <LogoCard key={index} title={item.title} url={item.logo} />

                    ))
                }
            </div>

        </div>
    )
}

export default TechnologyList