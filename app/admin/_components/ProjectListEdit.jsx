import React, { useContext } from 'react';
import { project } from '@/utils/schema';
import { db } from '@/utils';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CircleChevronRight, Trash2 } from 'lucide-react';
import { PreviewUpdateContext } from '@/app/_context/PreviewUpdateContext';


let timeoutId;

const ProjectListEdit = ({ projectList, refreshData }) => {

    const { updatePreview, setUpdatePreview } = useContext(PreviewUpdateContext)

    const { user } = useUser();

    const projectDelete = async (projectId) => {
        const result = await db.delete(project).where(eq(project.id, projectId))
        toast.error('Project Deleted', {
            position: 'top-right'
        }),
            refreshData();
        setUpdatePreview(updatePreview + 1);


    }


    const onInputChange = (event, fieldName, projectId) => {

        clearTimeout(timeoutId)

        timeoutId = setTimeout(async () => {
            const result = await db.update(project).set({
                [fieldName]: event.target.value

            }).where(eq(project.id, projectId));

            if (result) {
                toast.success('Project Updated', {
                    position: 'top-right'
                }),
                    setUpdatePreview(updatePreview + 1);
            }
            else {
                toast.error('Error', {
                    position: 'top-right'
                })
            }
        }, 1000)



    }


    return (
        <div>
            {projectList.map((project, index) => (
                <div className='my-10 bg-[#334155] p-5 rounded-lg'>
                    <div>
                        <h2 className='font-semibold'>
                            Add Project Details
                        </h2>
                        <input
                            type="text"
                            placeholder="Project Title"
                            defaultValue={project.name}
                            onChange={(event) => onInputChange(event, 'name', project.id)}
                            className="input my-3 input-bordered w-full"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            defaultValue={project.desc}
                            onChange={(event) => onInputChange(event, 'desc', project.id)}
                            className="input my-3 input-bordered w-full"
                        />
                        <input
                            type="text"
                            placeholder="URL"
                            className="input my-3 input-bordered w-full"
                            defaultValue={project.url}
                            onChange={(event) => onInputChange(event, 'url', project.id)}
                        />
                        <div className="flex justify-end">
                            <button onClick={() => projectDelete(project.id)} className="btn my-3 border-none hover:bg-red-900 text-[#DBCA9A] bg-red-950"><Trash2 /> Delete</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ProjectListEdit;
