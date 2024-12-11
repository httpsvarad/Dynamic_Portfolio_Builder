"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { UserButton } from '@clerk/nextjs';
import { ArrowUpRight, BarChart, Brush, Home, Layers3, Settings } from 'lucide-react';
import Link from 'next/link';
import React, { useContext } from 'react';

const SideNav = () => {

    const { userDetails, setUserDetails } = useContext(UserDetailContext);

    // console.log('user', userDetails)

    const menuList = [
        {
            id: 1,
            name: 'Design',
            icon: Layers3,
            path: '/admin'
        },
        {
            id: 2,
            name: 'Home',
            icon: Home,
            path: '/'
        },
//         {
//             id: 3,
// <<<<<<< HEAD
//             name: 'View Portfolio',
// =======
//             name: 'view',
// >>>>>>> dcc3489866aaec94d58efee3315a2edc5fd819b9
//             icon: ArrowUpRight,
//             path: 'https://ninjaxportfolio.vercel.app/httpsvarad'
//         },
        {
            id: 3,
            name: 'View Portfolio',
            icon: ArrowUpRight,
            path: `/${userDetails?.username}`,
            openInNewTab: true,
            
        },
    ];

    return (
        <div className='p-4 h-screen bg-[#DBCA9A]'>
            <div>
                {menuList.map((menu) => (
                    <Link href={menu.path} key={menu.id}  target={menu.openInNewTab ? '_blank' : '_self'} className='rounded-lg bg-primary cursor-pointer text-center flex-col items-center flex justify-center py-4 mb-5'>
                        <menu.icon />
                        <p className='mt-1 text-[11px]'>{menu.name}</p>

                    </Link>
                ))}
            </div>

            <div className='fixed bottom-4 px-4'>
                <UserButton signOutUrl="/" />
            </div>
        </div>

    );
};

export default SideNav;
