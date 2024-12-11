"use client"
import React, { useContext, useEffect, useState } from 'react';
import ProjectDetails from './_components/ProjectDetails';
import { UserDetailContext } from '../_context/UserDetailContext';
import UserDetailsInfo from './_components/UserDetailsInfo';
import { db } from '@/utils';
import { eq } from 'drizzle-orm';
import { userInfo } from '@/utils/schema';
import { useRouter } from 'next/navigation';

const UserPage = ({ params }) => {

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState('')


    const { userDetails, setUserDetails } = useContext(UserDetailContext);


    // console.log("Username from URL:", params.username);

    useEffect(() => {
        GetUserDetails();
    }, [])


    const GetUserDetails = async () => {
        const result = await db.query.userInfo.findMany({
            with: {
                project: true
            },
            where: eq(userInfo.username, params.username),
            limit: 1,

        })

        if (!result || result.length === 0) {
            // If no user is found, navigate to a 404 page or show an error
            router.push('/404'); // Redirect to a custom 404 page
            return;
        }

        // console.log("current", result)

        setUserDetails(result[0]);
        setCurrentUser(result[0]);

        

    }



    return (
        <div data-theme={currentUser.theme} className='p-3 md:px-10 grid h-screen overflow-auto grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <UserDetailsInfo currentUser={currentUser} />
            </div>
            <div className='md:col-span-2'>
                <ProjectDetails projectDetails={currentUser?.project} />
                {/* chage */}
            </div>

        </div>
    );
};

export default UserPage;
