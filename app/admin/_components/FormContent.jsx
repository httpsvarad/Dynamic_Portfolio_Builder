"use client"
import React, { useEffect, useState } from 'react'
import BasicDetails from './BasicDetails'
import AddProject from './AddProject'
import { db } from '@/utils'
import { project } from '@/utils/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import ProjectListEdit from './ProjectListEdit'
import PortfolioURL from './PortfolioURL'

const FormContent = () => {

  const { user } = useUser();

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    user && GetProjectList();
  }, [user])




  const GetProjectList = async () => {
    const result = await db.select().from(project).where(eq(project.emailref, user?.primaryEmailAddress.emailAddress))

    // console.log(result);
    setProjectList(result);
  }


  return (
    <div className='md:py-10 py-0 px-4'>
      <h2 className='text-3xl font-semibold'>Start Designing Your Portfolio!</h2>
      <PortfolioURL />
      <BasicDetails />
      <AddProject refreshData={GetProjectList} />
      <ProjectListEdit projectList={projectList} refreshData={GetProjectList} />
    </div>
  )
}

export default FormContent