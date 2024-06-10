import Image from 'next/image'
import React from 'react'

const BlockDiagram = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-8 mb-28'>
            <h1 className='text-3xl font-bold text-center text-black'>Funtionality</h1>
            <Image src="/images/block_diagram.svg" width={800} height={500} alt='Block Diagram' />
        </div>
    )
}

export default BlockDiagram