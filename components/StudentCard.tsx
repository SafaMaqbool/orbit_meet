import Image from 'next/image';
import React from 'react'

interface StudentCardProps {
    name: string;
    url: string;
}

const StudentCard = ({name, url}:StudentCardProps ) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center relative group'>
            <Image src={url} alt={name} width={250} height={2500} className='rounded-full border-8 border-white shadow-lg group-hover:scale-[1.01] transition-all group-hover:border-yellow-1'/>
            <h1 className='text-white bg-dark-1 px-2 py-1 rounded-md text-2xl absolute bottom-0'>{name}</h1>
        </div>
    )
}

export default StudentCard