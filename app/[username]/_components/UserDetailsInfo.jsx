"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { useUser } from '@clerk/nextjs';
import { Github, Linkedin, Mail, Wrench } from 'lucide-react';
import React, { useContext } from 'react';


const UserDetailsInfo = ({ currentUser }) => {
    // const { userDetails } = useContext(UserDetailContext);


    // console.log('user', userDetails?.name)

    return (
        <div className='flex flex-col mt-3 md:mt-0 md:justify-center md:h-screen'>
            <div>
                <div className='flex justify-center md:justify-start'>
                    <img className='h-[90px] w-[90px] rounded-full' src={currentUser.imageurl || "/images/user.png"} alt=" " />
                </div>
                <div>
                    <h2 className='font-bold text-center md:text-left my-2 text-lg md:text-2xl'>{currentUser.name}</h2>
                    <h2 className='my-2 text-center md:text-left'>{currentUser.bio}</h2>
                    <div className='flex justify-center md:justify-start my-2 gap-3'>
                        <a href={currentUser.linkedin}><Linkedin /></a>
                        <a href={currentUser.github}><Github /></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsInfo;
