import { UserButton } from '@clerk/nextjs';
import { ArrowUpRight, BarChart, Brush, Home, Layers3, Settings } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SideNav = () => {
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
        {
            id: 3,
            name: 'View Portfolio',
            icon: ArrowUpRight,
            path: 'https://ninjaxportfolio.vercel.app/httpsvarad'
        },
        // {
        //     id: 4,
        //     name: 'Settings',
        //     icon: Settings,
        //     path: '/admin/style'
        // },
    ];

    return (
        <div className='p-4 h-screen bg-[#DBCA9A]'>
            <div>
                {menuList.map((menu) => (
                    <Link href={menu.path} key={menu.id} className='rounded-lg bg-primary cursor-pointer text-center flex-col items-center flex justify-center py-4 mb-5'>
                        <menu.icon />
                        <p className='mt-1 text-[11px]'>{menu.name}</p>

                    </Link>
                ))}
            </div>

            <div className='fixed bottom-4 px-4'>
                <UserButton />
            </div>
        </div>

    );
};

export default SideNav;
