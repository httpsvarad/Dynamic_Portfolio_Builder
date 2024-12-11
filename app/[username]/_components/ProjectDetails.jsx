"use client";
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import React, { useContext, useState, useEffect } from 'react';

const ProjectDetails = ( {projectDetails=[]} ) => {
    // const { userDetails } = useContext(UserDetailContext);
    // const [projectDetails, setProjectDetails] = useState([]);

    // useEffect(() => {
       
    //     if (userDetails?.project) {
    //         setProjectDetails(userDetails.project);
    //     }
    // }, [userDetails]); 

    return (
        <div className='p-2 md:p-7 grid grid-cols-1 gap-5 md:grid-cols-2'>
            {projectDetails.length > 0 ? (
                projectDetails.map((project) => (
                    <div className='p-7 my-2 border shadow-md rounded-lg' key={project.id}>
                        <h2 className='font-bold'>{project.name}</h2>
                        <p className='my-2'>{project.desc}</p>
                        <button 
                            className="btn my-2 btn-primary"
                            onClick={() => window.open(project.url, '_blank')}
                        >
                            Launch Project
                        </button>
                    </div>
                ))
            ) : (
                <p>Loading! Refresh if data isn't updating.</p>
            )}
        </div>
    );
};

export default ProjectDetails;
