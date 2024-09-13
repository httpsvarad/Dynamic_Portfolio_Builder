"use client"
import React, { useContext } from 'react';
import ProjectDetails from './_components/ProjectDetails';
import { UserDetailContext } from '../_context/UserDetailContext';
import UserDetailsInfo from './_components/UserDetailsInfo';

const UserPage = () => {
    const { userDetails } = useContext(UserDetailContext);

    return (
        <div className='p-3 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <UserDetailsInfo />
            </div>
            <div className='md:col-span-2'>
                <ProjectDetails projectDetails={userDetails?.project} />
            </div> 
        </div>
    );
};

export default UserPage;
