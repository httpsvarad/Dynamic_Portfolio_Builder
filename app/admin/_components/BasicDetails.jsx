import { PreviewUpdateContext } from '@/app/_context/PreviewUpdateContext';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { db } from '@/utils';
import { userInfo } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { createClient } from '@supabase/supabase-js';
import { Camera, GitBranchIcon, Github, LinkedinIcon } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';

const supabaseurl = process.env.NEXT_PUBLIC_UPABASE_URL;
const supabasekey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseurl, supabasekey);

const BasicDetails = () => {

  let timeoutId;
  const { user } = useUser();

  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const { updatePreview, setUpdatePreview } = useContext(PreviewUpdateContext)

  useEffect(() => {
    userDetails;
  }, [userDetails])

  //Resume Upload Function
  const [uploading, setUploading] = useState(false);

  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    const filePath = `resumes/${user?.id}-${file.name}`;

    const { data, error } = await supabase.storage.from('resumes').upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    });

    if (error) {
      toast.error('Upload failed');
      console.error(error);
      setUploading(false);
      return;
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage.from('resumes').getPublicUrl(filePath);
    const resumeUrl = publicUrlData.publicUrl;

    // Save URL to the database
    const result = await db
      .update(userInfo)
      .set({ resume: resumeUrl })
      .where(eq(userInfo.email, user?.primaryEmailAddress.emailAddress));

    if (result) {
      toast.success('Resume uploaded successfully!');
    } else {
      toast.error('Failed to save resume link');
    }

    setUploading(false);
  };


  // Update imageURL on component mount or when user's image URL changes
  useEffect(() => {
    const updateImageUrl = async () => {
      if (user?.imageUrl) {
        try {
          // Fetch current imageurl from the database
          const currentDetails = await db
            .select({
              imageurl: userInfo.imageurl,
            })
            .from(userInfo)
            .where(eq(userInfo.email, user?.primaryEmailAddress.emailAddress));

          // Access the first result in the array
          const currentImageUrl = currentDetails[0]?.imageurl;

          // Update only if the imageUrl has changed
          if (currentImageUrl !== user.imageUrl) {
            const result = await db
              .update(userInfo)
              .set({
                imageurl: user.imageUrl,
              })
              .where(eq(userInfo.email, user?.primaryEmailAddress.emailAddress));

            if (result) {
              // toast.success('Profile Image Updated', { position: 'top-right' });
              setUpdatePreview(updatePreview + 1);
            } else {
              console.log('Error!')
            }
          }
        } catch (error) {
          console.error('Error updating image URL:', error);
        }
      }
    };

    updateImageUrl();
  }, [user?.imageUrl]); // Runs whenever user's image URL changes






  const onInputChange = (event, fieldName) => {

    clearTimeout(timeoutId)

    timeoutId = setTimeout(async () => {
      const result = await db.update(userInfo).set({
        [fieldName]: event.target.value,


      }).where(eq(userInfo.email, user?.primaryEmailAddress.emailAddress));

      if (result) {
        toast.success('Details Updated', {
          position: 'top-right'

        }),
          setUpdatePreview(updatePreview + 1)
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
        {/* <img className= 'h-12 w-12 rounded-full' src={user?.imageUrl} alt="" /> */}
        {/* <Camera className='p-3 h-12 w-12 bg-gray-400 rounded-full' /> */}
        <input onChange={(event) => onInputChange(event, 'name')} type="text" placeholder="Name" defaultValue={userDetails?.name} className="input input-bordered w-full" />
      </div>
      <textarea onChange={(event) => onInputChange(event, 'bio')} defaultValue={userDetails?.bio} className="textarea w-full mt-6 textarea-bordered" placeholder="Your headline"></textarea>

      <textarea onChange={(event) => onInputChange(event, 'profiledesc')} defaultValue={userDetails?.profiledesc} className="textarea w-full mt-6 textarea-bordered" placeholder="Your description (Visible in 3D Mode)"></textarea>


      <select
        className="select select-bordered w-full my-4"
        onChange={(event) => onInputChange(event, 'theme')}

      >
        <option value="">
          select theme: {userDetails?.theme}
        </option>
        <option value="light">LIGHT</option>
        <option value="dark">DARK</option>
        <option value="cupcake">CUPCAKE</option>
        <option value="bumblebee">BUMBLEBEE</option>
        <option value="emerald">EMERALD</option>
        <option value="corporate">CORPORATE</option>
        <option value="synthwave">SYNTHWAVE</option>
        <option value="retro">RETRO</option>
        <option value="cyberpunk">CYBERPUNK</option>
        <option value="valentine">VALENTINE</option>
        <option value="halloween">HALLOWEEN</option>
        <option value="garden">GARDEN</option>
        <option value="forest">FOREST</option>
        <option value="aqua">AQUA</option>
        <option value="lofi">LOFI</option>
        <option value="pastel">PASTEL</option>
        <option value="fantasy">FANTASY</option>
        <option value="wireframe">WIREFRAME</option>
        <option value="black">BLACK</option>
        <option value="luxury">LUXURY</option>
        <option value="dracula">DRACULA</option>
        <option value="cmyk">CMYK</option>
        <option value="autumn">AUTUMN</option>
        <option value="business">BUSINESS</option>
        <option value="acid">ACID</option>
        <option value="lemonade">LEMONADE</option>
        <option value="night">NIGHT</option>
        <option value="coffee">COFFEE</option>
        <option value="winter">WINTER</option>
        <option value="dim">DIM</option>
        <option value="nord">NORD</option>
        <option value="sunset">SUNSET</option>
      </select>


      <div className='md:flex gap-3 mt-1'>

        <label className="input input-bordered flex items-center gap-2">
          <LinkedinIcon />
          <input type="text" className='w-full' defaultValue={userDetails?.linkedin}
            onChange={(event) => onInputChange(event, 'linkedin')}
            placeholder="Linked-IN" />
        </label>

        <label className="input mt-5 md:mt-0 input-bordered flex items-center gap-2">
          <Github />
          <input type="text" className='w-full' defaultValue={userDetails?.github}
            onChange={(event) => onInputChange(event, 'github')}
            placeholder="GitHub" />
        </label>

        <label className="btn btn-neutral">
          {uploading ? "Uploading..." : "Upload Resume"}
          <input
            type="file"
            className="hidden"
            onChange={handleResumeUpload}
            disabled={uploading}
          />
        </label>



      </div>
    </div>
  )
}

export default BasicDetails 