import Image from 'next/image';
import React from 'react'

interface LogoCardProps {
    title: string;
    url: string;
}

const LogoCard = ({ title, url }: LogoCardProps) => {
    return (
        <div className='group bg-dark-10 rounded-md min-h-[170px] flex flex-col items-center justify-center gap-4 shadow-lg hover:bg-yellow-1/90'>
            <div className='border bg-slate-100 relative h-20 w-20 rounded-full'>
                <Image src={url} alt={title} fill className='object-contain p-4 group-hover:scale-105 transition-all' />
            </div>
            <h1 className='font-bold'>
                {title}
            </h1>

        </div>
    )
}

export default LogoCard