import React from 'react'
import { IconType } from 'react-icons';



interface FeatureCardProps {
    title: string;
    description: string;
    Icon: IconType;
}
const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
    return (
        <div className='group flex gap-2 bg-dark-10 p-3 rounded-md items-center shadow-md hover:bg-white'>
            <div className='min-h-20 min-w-20 shadow-sm bg-white rounded-full flex items-center justify-center text-white group-hover:bg-green-1'>
                <Icon size={40} className='text-green-1 group-hover:text-white' />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <div>
                    <h2 className='text-sm leading-relaxed'>{description}</h2>
                </div>
            </div>

        </div>
    )
}

export default FeatureCard