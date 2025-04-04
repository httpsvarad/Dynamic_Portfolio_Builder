"use client";
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import React, { useContext, useState, useEffect } from 'react';

const ProjectDetails = ({ projectDetails = [] }) => {
    

    return (
        <div className='p-2 pt-0 md:p-3 md:pr-0 md:pt-5 grid grid-cols-1 gap-6 md:grid-cols-2'>
            
            {projectDetails.length > 0 ? (
                projectDetails.map((project) => (
                    <div className='p-7 mb-2 md:mb-1 border border-gray-300 md:mr-1 shadow-md rounded-lg' key={project.id}>
                        <div className='flex justify-between'>
                            <h2 className='font-bold'>{project.name}</h2>
                            {project.label && (
                                <div className="badge badge-outline badge-primary">{project.label}</div>
                            )}
                        </div>
                        
                        <p className='my-2'>{project.desc}</p>

                        {project.tech && (
                                <p className='font-medium my-2 italic text-sm'>TechStack: {project.tech}</p>
                            )}

                        

                        <button
                            className="btn my-2 btn-sm btn-primary"
                            onClick={() => window.open(project.url, '_blank')}
                        >
                            Explore
                        </button>
                    </div>
                ))
            ) : (
                <p>Start adding your projects / Refresh if it's taking too long!</p>
            )}
        </div>
    );
};

export default ProjectDetails;