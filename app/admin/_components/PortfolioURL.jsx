import { UserDetailContext } from '@/app/_context/UserDetailContext';
import React, { useContext, useEffect, useState } from 'react';

const PortfolioURL = () => {

    const { userDetails } = useContext(UserDetailContext);

    const [usernameurl, setUsernameurl] = useState('')


    useEffect(() => {
        const setUsernameSrc = async () => {
          if (userDetails?.username) {
            // Simulate an async operation if needed
            await new Promise((resolve) => setTimeout(resolve, 0)); // Placeholder
            setUsernameurl(userDetails?.username);
          }
        };
    
        setUsernameSrc();
      }, [userDetails]);

    
    const [isCopied, setIsCopied] = useState(false);
    const url = `https://ninjaxportfolio.vercel.app/${usernameurl}`;



    const handleCopy = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
            })
            .catch(() => alert("Failed to copy!"));
    };

    return (
        <div className="w-auto mt-3">
            <p className='text-sm mb-1'>Your Portfolio URL</p>
            <div className="relative">
                
                <label htmlFor="portfolio-url" className="sr-only">Portfolio URL</label>
                
                <input
                    id="portfolio-url"
                    type="text"
                    className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={url}
                    disabled
                    readOnly
                />
                <button
                    onClick={handleCopy}
                    className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
                >
                    {!isCopied ? (
                        <span className="inline-flex items-center">
                            <svg
                                className="w-3 h-3 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                            <span className="text-xs font-semibold">Copy</span>
                        </span>
                    ) : (
                        <span className="inline-flex items-center">
                            <svg
                                className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                />
                            </svg>
                            <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PortfolioURL;
