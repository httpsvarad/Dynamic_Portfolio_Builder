"use client"
import { PreviewUpdateContext } from '@/app/_context/PreviewUpdateContext';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { UserButton } from '@clerk/nextjs';
import { ArrowUpRight, BarChart, Brush, FileQuestion, Home, Layers3, Settings } from 'lucide-react';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const SideNav = () => {

    const { userDetails, setUserDetails } = useContext(UserDetailContext);
    const { updatePreview, setUpdatePreview } = useContext(PreviewUpdateContext);
    const [iframeSrc, setIframeSrc] = useState('');


    useEffect(() => {
        const setUsernameSrc = async () => {
            if (userDetails?.username) {
                // Simulate an async operation if needed
                await new Promise((resolve) => setTimeout(resolve, 0)); // Placeholder
                setIframeSrc(`/${userDetails.username}`);
            }
        };

        setUsernameSrc();
    }, [userDetails]);

    console.log(updatePreview)

    // console.log('user', userDetails)

    const menuList = [
        {
            id: 1,
            name: 'Help',
            icon: FileQuestion,
            path: 'mailto:varad.manegopale28@gmail.com'
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
            name: 'Visit Portfolio',
            icon: ArrowUpRight,
            path: `/${userDetails?.username}`,
            openInNewTab: true,

        },
    ];

    return (
        <div className='p-4 h-screen bg-[#DBCA9A]'>
            <div>
                {menuList.map((menu) => (
                    <Link href={menu.path} key={menu.id} target={menu.openInNewTab ? '_blank' : '_self'} className='rounded-lg bg-primary cursor-pointer text-center flex-col items-center flex justify-center py-4 mb-5'>
                        <menu.icon />
                        <p className='mt-1 text-[11px]'>{menu.name}</p>

                    </Link>
                ))}
            </div>


            {/* mobilemodalpreview */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn block md:hidden px-[0.66rem] text-[11px]" onClick={() => document.getElementById('my_modal_4').showModal()}>Live Preview</button>
            <dialog id="my_modal_4" className="modal">
                <div className='p-3 h-full justify-center items-center flex w-full'>
                    <div className="modal-box w-full overflow-hidden h-full">
                        <iframe src={iframeSrc} className="h-[90%] w-full"
                            key={updatePreview}
                            frameborder="0"></iframe>
                        {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p> */}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn text-red-700 font-bold hover:bg-slate-100 bg-slate-200">Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>






            <div className='fixed bottom-4 px-4'>
                <UserButton signOutUrl="/" />
            </div>
        </div>

    );
};

export default SideNav;
