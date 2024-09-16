"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import React, { useContext } from 'react'


const MobilePreview = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  
  return (
    <div>
        <div className='border-[13px] border-[#313131] rounded-[30px] h-[550px] md:h-screen m-3 shadow-md shadow-yellow-200 '>

        <iframe className='h-full w-full rounded-[20px]'  src={'/${userDetails.username}'}></iframe>

        </div>
    </div>
  )
}

export default MobilePreview