import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { db } from '@/utils';
import { project } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { Link } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {

    const {user}=useUser();
    const { userDetails, setUserDetails } = useContext(UserDetailContext);

    const [openProjectBox, setOpenProjectBox] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        const result=await db.insert(project).values({
            url:e.target[0].value,
            emailref:user?.primaryEmailAddress.emailAddress,
            userref:userDetails?.id
        });

        setOpenProjectBox(false);

        if(result) {
            toast.success('URL Added - Refresh to Preview',{
                position:'top-right'
            })
        }

        else {
            toast.error('Error',{
                position:'top-right'
            })

        }



    }



    return (
        <div>
            {!openProjectBox ?
                <button onClick={()=>setOpenProjectBox(true)} className="btn w-full bg-[#683959] btn-accent">Add New Project</button>
                :

                <form onSubmit={handleSubmit}>

                    <label className="input input-bordered flex my-3  items-center gap-2">
                        <Link />
                        <input className='w-full' type="url"
                            placeholder="Project URL" required />
                    </label>
                    <button type="submit" className="btn btn-outline my-2 btn-neutral">Add URL</button>

                </form>}


        </div>
    )
}

export default AddProject
