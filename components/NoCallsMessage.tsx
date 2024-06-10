import Image from 'next/image'
import React, { ReactNode } from 'react'

const NoCallsMessage = ({ children }: { children: ReactNode }) => {
    return (
        <div>

            <div className='absolute left-1/2 top-1/2'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='bg-slate-100 w-fit rounded-sm p-3 text-xl'>
                        {children}
                    </h1>
                    <Image src="/images/sleep.png" alt='Sleep' width={200} height={200} className='' />
                </div>
            </div>

        </div>
    )
}

export default NoCallsMessage