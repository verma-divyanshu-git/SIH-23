import React from 'react';
const home = () => {
    return ( 
        <>
        <div className='h-screen bg-white text-black '>
        <nav className=" bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AICTE</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Login/Sign-Up</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chat</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Recordings</a>
                </li>
            </ul>
            </div>

        </div>
        </nav>
        <div className='mt-20 ml-20 flex justify-around'>
            <div className='mt-10'>
            <p className='text-4xl ' >
                Premium video meetings.
            </p>
            
            <p className='text-3xl'>
                Now free for anyone.
            </p>
            <br></br>
            <p>
            We re-engineered the service we built for secure business <br></br> meetings, Google Meet, to make it free and available for all.
            </p>
            <p>
            We re-engineered the service we built for secure business <br></br> meetings, Google Meet, to make it free and available for all.
            </p>
            <p>
            We re-engineered the service we built for secure business <br></br> meetings, Google Meet, to make it free and available for all.
            </p>
            <p>
            We re-engineered the service we built for secure business <br></br> meetings, Google Meet, to make it free and available for all.
            </p>
            <br></br>
            <button type="button" className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            🎥 Instant meeting
            </button>
            <button type="button" className="ml-3 text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
            ⏳ Schedule a meeting
            </button>
            </div>
            <div className='mt-10'>
            <img className="flex" src="https://explore.zoom.us/docs/image/qgr-report/qualtrics-hero.gif" alt="Get a link you can share" style={{height:'300px',width:'400px'}} role="img" data-atf="true" data-iml="2506.7000000029802"></img> 
            </div>
        </div>
        </div>
        </>
 );
}
 
export default home;


// import React, { useEffect, useRef } from 'react';
// import LottiePlayer from "@lottiefiles/react-lottie-player";
// import Lottie from "lottie-react";
// import officeAnimation from '../office.json'; 
// // import Link from "next/link";
// // import Logo from "./Logo";
// // import Button from "./Button";

// const mainpage = () => {
  

//   // useEffect(() => {
//   //   lottie.loadAnimation({
//   //     container: container.current,
//   //     renderer: 'svg',
//   //     loop: true,
//   //     autoplay: true,
//   //     animationData: require('../office.json')
//   //   })
//   // }, [])
//   const animationStyles = {
//     width: '200px', // Set your desired width
//     height: '200px', // Set your desired height
//     background:'white',
//   };
  
  
//   return (
//     <>
//         <div>
        
//             <nav className="bg-gray-200 border-gray-200 ">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="https://flowbite.com/" className="flex items-center">
//                     <img src="/logo.png " className="h-8 mr-3 " style={{width:'50px',height:'50px'}} alt="Flowbite Logo" />
//                     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">AICTE</span>
//                 </a>
//                 <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//                     </svg>
//                 </button>
//                 <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//                 <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
//                     <li>
//                     <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:p-0 bg-gray-200">Log In</a>
//                     </li>
//                     <li>
//                     <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:p-0 bg-gray-200">Recording</a>
//                     </li>
//                     <li>
//                     <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:p-0 bg-gray-200">Chat</a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//             </nav>

//         </div >
//         <div className="flex flex-col w-full justify-center items-center bg-white mg pd">
//         <Lottie
//           animationData={officeAnimation} // Use animationData instead of animationURL
//           className="flex justify-center items-center"
//           loop={true}
//           style={animationStyles} // Apply styles here
//         />
//       </div>
//         <div>
//         <section className="text-gray-600 body-font bg-white">
//         <div className="max-w-5xl pt-52 pb-24 mx-auto">
//             <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
//             Create your next website fast and easy
//             </h1>
//             <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
//             nine4 is a free to use template website for websites made
//             <br />
//             with Next.js and styled with Tailwind CSS
//             </h2>
//             <div className="ml-6 text-center">
//             <a
//                 className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
//                 href="/"
//             >
//                 <div className="flex text-lg">
//                 <span className="justify-center">Create an Instant Meeting</span>
//                 </div>
//             </a>
//             <a
//                 className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
//                 href="/"
//             >
//                 <div className="flex text-lg">
//                 <span className="justify-center">Schedule a meeting</span>
//                 </div>
//             </a>
//             </div>
//         </div>
        
//         </section>
//         </div>
        
//     </>
//   )
// }

// export default mainpage