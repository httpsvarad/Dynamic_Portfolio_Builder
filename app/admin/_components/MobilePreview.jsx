"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import React, { useContext } from 'react'


const MobilePreview = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  
  return (
    <div>
        <div className='border-[13px] border-[#313131] rounded-[30px] h-[550px] md:h-screen m-3 shadow-md shadow-yellow-200 '>

<<<<<<< HEAD
        <iframe className='h-full w-full rounded-[20px]'  src={'/${userDetails.username}'}></iframe>
=======
        <iframe className='h-full w-full rounded-[20px]'  src="https://ninjaxportfolio.vercel.app/httpsvarad"></iframe>
>>>>>>> dcc3489866aaec94d58efee3315a2edc5fd819b9

        </div>
    </div>
  )
}

export default MobilePreview
