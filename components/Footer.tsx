import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-24 w-full bg-dark-9 rounded-md flex justify-center items-center'>
            <Image src="/images/shu_logo.png" width={500} height={100} alt='SHU Logo' className=''/>
        </div>
    )
}

export default Footer