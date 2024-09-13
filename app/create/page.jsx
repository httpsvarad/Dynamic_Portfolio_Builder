"use client"
import { db } from '@/utils';
import { userInfo } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CreateUsername = () => {
  const [username, setUsername] = useState("");
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && checkUser();
  }, [user])

  const checkUser = async () => {

    const result = await db.select().from(userInfo)
      .where(eq(userInfo.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);

    if (result?.length > 0) {

      router.replace('/admin')

    }
  }


  const OnCreateBtnClick = async () => {
    if (username.length > 10) {
      toast.error("No More than 10 Characters", {
        position: "bottom-right"
      });
      return;
    }

    const result = await db.insert(userInfo)
      .values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        username: username.replace(' ', '')

      })

    if (result) {
      toast.success("User Created Successfully!", {
        position: "bottom-right"
      });
      router.replace('/admin')
    }
  }

  return (
    <div className='items-center justify-center h-screen flex'>
      <div className='border rounded-md p-10 flex flex-col'>
        <h2 className='font-bold text-2xl text-center py-5'>Create Portfolio Username</h2>
        <label>Add Username for Your Portfolio</label>
        <input
          type="text"
          placeholder="Type here"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={OnCreateBtnClick}
          disabled={!username}
          className="btn mt-3 btn-primary">
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateUsername;
