"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import React, { useContext } from 'react';

const UserDetailsInfo = () => {
    const { userDetails } = useContext(UserDetailContext);
    return (
        <div className='flex flex-col mt-3 md:mt-0 md:justify-center md:h-screen'>
            <div>
                <div className='flex justify-center md:justify-start'>
                    <img className='h-[90px] w-[90px] rounded-full' src="/images/unilog.jpeg" alt=" " />
                </div>
                <div>
                    <h2 className='font-bold text-center md:text-left my-2 text-lg md:text-2xl'>{userDetails?.name}</h2>
                    <h2 className='my-2 text-center md:text-left'>{userDetails?.bio}</h2>
                    <div className='flex justify-center md:justify-start my-2 gap-3'>
                        <a href={userDetails?.linkedin}><Linkedin /></a>
                        <a href={userDetails?.github}><Github /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsInfo;
