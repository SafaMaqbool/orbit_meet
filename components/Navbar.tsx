import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <div className='flex justify-between fixed z-50 w-full bg-transparent px-6 py-1 lg:px-4'>
            <Link href="/" className='flex items-center gap-1'>
                <Image src="/icons/logo.svg" width={150} height={50} alt='Logo' className='max-sm:size-12' />
            </Link>
            <div className='flex-between gap-5'>
                <SignedIn>
                <UserButton appearance={{elements: {
                    userButtonAvatarBox: "w-10 h-10"
                }}}/>
                </SignedIn>
                <MobileNav />
            </div>

        </div>
    )
}

export default Navbar