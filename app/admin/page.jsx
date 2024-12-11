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
        <div className='max-h-[100vh] overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='pt-3 md:pt-0 col-span-2 overflow-y-auto max-h-[100vh]'>
                    <FormContent/>
                </div>
                <div className='overflow-hidden hidden md:block'>
                    <MobilePreview/>
                </div>

            </div>
        </div>
    )
}

export default admin