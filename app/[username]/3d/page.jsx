"use client"
// import { BrowserRouter } from "react-router-dom";

import "./index.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
// import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { db } from "@/utils";
import { eq } from "drizzle-orm";
import { userInfo } from '@/utils/schema';

const ThreeDim = ({ params }) => {

  const router = useRouter();

  const [currentUser, setCurrentUser] = useState('')


  const { userDetails, setUserDetails } = useContext(UserDetailContext);


  // console.log("Username from URL:", params.username);

  useEffect(() => {
      GetUserDetails();
  }, [])


  const GetUserDetails = async () => {
      const result = await db.query.userInfo.findMany({
          with: {
              project: true
          },
          where: eq(userInfo.username, params.username),
          limit: 1,

      })

      if (!result || result.length === 0) {
          // If no user is found, navigate to a 404 page or show an error
          router.push('/'); // Redirect to a custom 404 page
          return;
      }

      // console.log("current", result)

      setUserDetails(result[0]);
      setCurrentUser(result[0]);

      

  }


  return (
    // <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-20 bg-no-repeat bg-center">
          {/* <Navbar /> */}
          <Hero currentUser={currentUser} />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <About currentUser={currentUser} />
          <StarsCanvas />
        </div>
        {/* <div className="relative z-0">
          <Experience />
          <StarsCanvas />
        </div> */}
        <div className="relative z-0">
          {/* <Tech /> */}
          <Works projectDetails={currentUser?.project} />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Feedbacks currentUser={currentUser} />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Contact currentUser={currentUser} />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
   
  );
};

export default ThreeDim;
