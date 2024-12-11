'use client'
import { db } from '@/utils'
import { userInfo } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'

const Provider = ({ children }) => {

  // const { user } = useUser();
  const { userDetails } = useContext(UserDetailContext);

  // useEffect(() => {
  //   user && GetUserDetails();
  // }, [user])



  // const GetUserDetails = async () => {
  //   const result = await db.query.userInfo.findMany({
  //     with: {
  //       project: true
  //     },
  //     where: eq(userInfo.email, user?.primaryEmailAddress.emailAddress)

  //   })

  //   setUserDetails(result[0]);
  // }



  return (
    <div data-theme={userDetails?.theme}>
      {children}
    </div>
  )
}

export default Provider