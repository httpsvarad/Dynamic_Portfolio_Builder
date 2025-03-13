// import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
// // import resume from "/src/jeff_jiang.pdf";
// import { LOGO2 } from "../assets";
// import Link from "next/link";
// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "backdrop-blur-sm" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={LOGO2} alt='logo' className='w-24 h-24 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex'>
//             FullStack Developer &nbsp;
//             {/* <span className='sm:block hidden'> | Portfolio</span> */}
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row items-center gap-10">
//         {/* <a href={resume} download="jeff_jiang.pdf"> */}
//             <button
//               className={`${
//                 active === Link.title ? "abhishek" : "abhishek-btn"
//               }   font-medium cursor-pointer border-[1px]`}
//               onClick={() => setActive(Link.title)}
//             >
//               <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
//                 {" "}
//                 <svg
//                   class="fill-current w-4 h-4 mr-2"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
//                 </svg>{" "}
//                 Download CV
//               </span>

//             </button>
//           </a>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//             <a href={resume} download="jeff_jiang.pdf">
//             <button
//               className={`${
//                 active === Link.title ? "abhishek" : "abhishek-btn"
//               }   font-medium cursor-pointer border-[1px]`}
//               onClick={() => setActive(Link.title)}
//             >
//               <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
//                 {" "}
//                 <svg
//                   class="fill-current w-4 h-4 mr-2"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
//                 </svg>{" "}
//                 Download CV
//               </span>

//             </button>
//           </a>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
