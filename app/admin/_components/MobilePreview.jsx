"use client";
import { PreviewUpdateContext } from '@/app/_context/PreviewUpdateContext';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import React, { useContext, useEffect, useState } from 'react';
// import "mobile.module.css"

const MobilePreview = () => {
  const { userDetails } = useContext(UserDetailContext);
  const [iframeSrc, setIframeSrc] = useState('');
  const {updatePreview, setUpdatePreview}=useContext(PreviewUpdateContext)


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

  return (
    <div>
      <div
        
        className="border-[13px] border-[#313131] rounded-[10px] h-[550px] m-3 shadow-md shadow-yellow-200 overflow-hidden"
      >
        {iframeSrc ? (
          <iframe 
            className="h-full w-full"
            key={updatePreview}
            id='iframepre'
            src={iframeSrc}
            style={{
              overflow: 'auto', // Prevents scrollbar from appearing
              border: 'none', // Optional: Remove iframe border
            }}
            scrolling="yes" 
            // style={{
            //   overflow: 'hidden',
            // }}
          ></iframe>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePreview;
