import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { db } from '@/utils';
import { userInfo } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { Camera, GitBranchIcon, LinkedinIcon } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BasicDetails = () => {

  let timeoutId;
  const { user } = useUser();

  const { userDetails, setUserDetails } = useContext(UserDetailContext);

  useEffect(() => {
    userDetails && console.log(userDetails);
  }, [userDetails])



  const onInputChange = (event, fieldName) => {

    clearTimeout(timeoutId)

    timeoutId = setTimeout(async () => {
      const result = await db.update(userInfo).set({
        [fieldName]: event.target.value

      }).where(eq(userInfo.email, user?.primaryEmailAddress.emailAddress));

      if (result) {
        toast.success('Details Updated - Refresh to Preview', {
          position: 'top-right'
        })
      }
      else {
        toast.error('Error', {
          position: 'top-right'
        })
      }
    }, 1000)



  }


  return (
    <div className='p-7 bg-slate-700 my-5 rounded-lg'>
      <div className='flex gap-6'>
        <img className= 'h-12 w-12 rounded-full' src="/images/unilog.jpeg" alt="" />
        {/* <Camera className='p-3 h-12 w-12 bg-gray-400 rounded-full' /> */}
        <input disabled type="text" placeholder="Name" defaultValue={userDetails?.name} className="input input-bordered w-full" />
      </div>
      <textarea onChange={(event) => onInputChange(event, 'bio')} defaultValue={userDetails?.bio} className="textarea w-full mt-6 textarea-bordered" placeholder="Write about yourself"></textarea>


      <select
        className="select select-bordered w-full my-4"
        onChange={(event) => onInputChange(event, 'theme')}
        
      >
        <option value="">
          Select your theme
        </option>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="bumblebee">bumblebee</option>
        <option value="emerald">emerald</option>
        <option value="corporate">corporate</option>
        <option value="synthwave">synthwave</option>
        <option value="retro">retro</option>
        <option value="cyberpunk">cyberpunk</option>
        <option value="valentine">valentine</option>
        <option value="halloween">halloween</option>
        <option value="garden">garden</option>
        <option value="forest">forest</option>
        <option value="aqua">aqua</option>
        <option value="lofi">lofi</option>
        <option value="pastel">pastel</option>
        <option value="fantasy">fantasy</option>
        <option value="wireframe">wireframe</option>
        <option value="black">black</option>
        <option value="dracula">dracula</option>
        <option value="cmyk">cmyk</option>
        <option value="autumn">autumn</option>
        <option value="business">business</option>
        <option value="acid">acid</option>
        <option value="lemonade">lemonade</option>
        <option value="coffee">coffee</option>
      </select>


      <div className='md:flex gap-3 mt-1'>

        <label className="input input-bordered flex items-center gap-2">
          <LinkedinIcon />
          <input type="text" defaultValue={userDetails?.linkedin}
            onChange={(event) => onInputChange(event, 'linkedin')}
            placeholder="Linked-IN" />
        </label>

        <label className="input mt-5 md:mt-0 input-bordered flex items-center gap-2">
          <GitBranchIcon />
          <input type="text" defaultValue={userDetails?.github}
            onChange={(event) => onInputChange(event, 'github')}
            placeholder="GitHub" />
        </label>


      </div>
    </div>
  )
}

export default BasicDetails 