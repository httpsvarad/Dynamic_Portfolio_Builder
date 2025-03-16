"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { useUser } from '@clerk/nextjs';
import { Download, ExternalLink, Github, Link, Linkedin, Mail, Wrench } from 'lucide-react';
import React, { useContext } from 'react';


const UserDetailsInfo = ({ currentUser }) => {

    const gitusername = currentUser?.github ? currentUser.github.split("/").pop() : "Unknown";

    return (
        <div className='flex flex-col mt-3 md:mt-0 md:justify-center md:h-screen'>
            <div>
                <div className='flex justify-center md:justify-start'>
                    <img className='h-[90px] w-[90px] rounded-full' src={currentUser.imageurl || "/images/user.png"} alt=" " />
                </div>
                <div>
                    <h2 className='font-bold text-center md:text-left my-2 text-lg md:text-2xl'>{currentUser.name}</h2>
                    <h2 className='my-2 text-center md:text-left'>{currentUser.bio}</h2>
                    {/* <a className='my-2 text-center md:text-left' href={`mailto:${currentUser.email}`}>{currentUser.email}</a> */}
                    <div className='flex justify-center md:justify-start my-3 gap-3'>
                        <a className='my-auto' href={currentUser?.linkedin}><Linkedin /></a>
                        <a className='my-auto' href={currentUser?.github}><Github /></a>
                        <a className='my-auto' target='blank' href={currentUser?.resume}><button className="btn btn-outline btn-sm btn-primary">Resume<Download size={18} /></button></a>
                        <a className="my-auto" href={`/${currentUser?.username}/3d`}>
                            <button className="btn btn-sm btn-outline btn-secondary">
                                3D <Link size={18} className="animate-bounce" />
                            </button>
                        </a>



                    </div>

                </div>

                {/* GitHub Stats */}
                <div className="mt-5 p-2 md:p-0">
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${gitusername}&show_icons=true&theme=radical&border_color=00000000`}
                        alt="GitHub Stats"
                        className="border-0 rounded-lg"
                    />
                </div>


            </div>
        </div>
    );
};

export default UserDetailsInfo;




// "use client";

// import { motion } from "framer-motion";
// import { Github, Linkedin, Download } from "lucide-react";
// import React from "react";

// const UserDetailsInfo = ({ currentUser }) => {
//     return (
//         <motion.div
//             className="relative flex flex-col items-center md:items-start mt-6 md:mt-0 md:justify-center md:h-screen"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//             {/* Floating Gradient Glow */}
//             <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl opacity-50 animate-pulse"></div>

//             {/* Main Card */}
//             <motion.div
//                 className="relative w-full max-w-lg p-6 bg-base-100/80 shadow-2xl rounded-3xl border border-primary/30 backdrop-blur-lg transition-transform hover:scale-[1.02]"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 {/* Floating 3D Profile Image */}
//                 <motion.div
//                     className="flex justify-center md:justify-start relative"
//                     initial={{ y: -10, opacity: 0 }}
//                     animate={{ y: [0, -5, 0], opacity: 1 }}
//                     transition={{ delay: 0.3, duration: 2, repeat: Infinity, repeatType: "reverse" }}
//                 >
//                     <motion.img
//                         className="h-[100px] w-[100px] rounded-full shadow-xl transition-transform hover:rotate-6 hover:scale-105"
//                         src={currentUser.imageurl || "/images/user.png"}
//                         alt="Profile"
//                     />
//                 </motion.div>

//                 {/* User Info */}
//                 <div className="text-center md:text-left mt-6">
//                     <motion.h2
//                         className="font-extrabold text-3xl md:text-4xl tracking-wide drop-shadow-lg"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.4, duration: 0.5 }}
//                     >
//                         {currentUser.name}
//                     </motion.h2>
//                     <motion.p
//                         className="mt-3 text-lg tracking-wide"
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.5, duration: 0.5 }}
//                     >
//                         {currentUser.bio}
//                     </motion.p>

//                     {/* Social & Resume Links */}
//                     <motion.div
//                         className="flex justify-center md:justify-start mt-5 gap-5"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6, duration: 0.5 }}
//                     >
//                         <motion.a
//                             className="btn btn-circle btn-outline btn-primary transition-all hover:scale-110 hover:shadow-lg"
//                             href={currentUser.linkedin}
//                             target="_blank"
//                             whileHover={{ y: -5 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <Linkedin size={22} />
//                         </motion.a>
//                         <motion.a
//                             className="btn btn-circle btn-outline btn-accent transition-all hover:scale-110 hover:shadow-lg"
//                             href={currentUser.github}
//                             target="_blank"
//                             whileHover={{ y: -5 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <Github size={22} />
//                         </motion.a>
//                         <motion.a
//                             className="btn btn-primary flex items-center gap-2 px-5 py-2 rounded-full text-lg transition-all hover:scale-110 hover:shadow-lg"
//                             href={currentUser.resume}
//                             target="_blank"
//                             whileHover={{ y: -5 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             Resume <Download size={20} />
//                         </motion.a>
//                     </motion.div>
//                 </div>

//                 {/* Floating GitHub Stats */}
//                 <motion.div
//                     className="mt-6 rounded-2xl transition-all hover:scale-[1.03]"
//                     whileHover={{ scale: 1.03 }}
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: [0, 5, 0], opacity: 1 }}
//                     transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//                 >
//                     <img
//                         src={`https://github-readme-stats.vercel.app/api?username=httpsvarad&show_icons=true&theme=radical`}
//                         alt="GitHub Stats"
//                         className="border-0 shadow-none"
//                     />
//                 </motion.div>

//                 {/* Floating Neon Accent */}
//                 <div className="absolute top-[-10px] left-[-10px] w-5 h-5 bg-accent rounded-full blur-xl opacity-50"></div>
//                 <div className="absolute bottom-[-10px] right-[-10px] w-5 h-5 bg-primary rounded-full blur-xl opacity-50"></div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default UserDetailsInfo;



