"use client"
import { db } from '@/utils'
import { userInfo } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react'
import FormContent from './_components/FormContent'
import MobilePreview from './_components/MobilePreview'

const admin = () => {

    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        user && checkUser();
    }, [user])

    const checkUser = async () => {

        const result = await db.select().from(userInfo)
            .where(eq(userInfo.email, user?.primaryEmailAddress?.emailAddress));

       

        if (result?.length == 0) {

            router.replace('/create')

        }
    }

    return (
        <div className='p-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <FormContent/>
                </div>
                <div>
                    <MobilePreview/>
                </div>

            </div>
        </div>
    )
}

export default admin