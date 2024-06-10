"use client";

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();
    const user = useUser();
    return (
        <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
            <div className='flex flex-1 flex-col gap-6'>
                {
                    sidebarLinks.map((link) => {
                        const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                        return (
                            <Link
                                href={link.route}
                                key={link.label}
                                className={cn('flex gap-4 items-center px-4 py-2 rounded-md justify-start hover:bg-black/20 transition-all', {
                                    'bg-green-1 hover:bg-green-1 text-black transition-all': isActive
                                })}
                            >
                                <Image
                                    src={link.imgUrl} 
                                    alt={link.label}
                                    width={22}
                                    height={22} 
                                    className={cn('', {'invert': isActive})}
                                />
                                <p className='text-lg font-semibold max-lg:hidden'>
                                    {link.label}
                                </p>
                            </Link>
                        )

                    })
                }
            </div>

            <div>
                <p>Welcome,</p>
                <p className='text-sm w-fit truncate bg-black p-2 rounded-md'>{user.user?.primaryEmailAddress?.emailAddress}</p>
            </div>
        </section>
    )
}

export default Sidebar