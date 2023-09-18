import React from 'react'
import { AiFillAudio } from "react-icons/ai";
import { BsFillCameraVideoFill, BsPeopleFill, BsChatLeft } from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import { HiPhoneMissedCall } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GoShare } from "react-icons/go";
import { MdOutlineScreenShare } from "react-icons/md";
const meetNav = () => {
  return (
    <>
    <div className='width-full h-screen bg-[#00122e] relative'>
    <nav className='absolute top-0 left-0 bottom-0 bg-[#182842] w-[120px] py-10 flex items-center justify-center'>
        <ul className='space-y-10 text-3xl'>
        <li className='hover:scale-[1.1] duration-500 cursor-pointer'><AiFillAudio/></li>
        <li className='hover:scale-[1.1] duration-500 cursor-pointer'><BsFillCameraVideoFill/></li>
        <li className='hover:scale-[1.1] duration-500 cursor-pointer'><BsPeopleFill/></li>
        <li className='hover:scale-[1.1] duration-500 cursor-pointer'><GoShare/></li>
        <li className='hover:scale-[1.1] duration-500 cursor-pointer'><BsChatLeft/></li>
        <li className='hover:scale-[1.1] duration-500 cursor-pointer'><RiSettings4Fill/></li>
        </ul>
    </nav>
    
    <div className='ml-[120px] px-[2.5%]'>
        <div className='flex justify-between'>
            <div className='basis-8/12 mt-8'>
                <img className="rounded-2xl" src="pic1.png" alt="" />
                <div className='flex items-center justify-center mt-16'>
                <div className='flex items-center justify-center space-x-4'>
                    <div className='text-2xl text-white my-20px mx-10px cursor-pointer rounded-full bg-[#23344d] p-4 hover:scale-[1.1]'><BsChatLeft/></div>
                    <div className='text-2xl my-20px mx-10px cursor-pointer rounded-full bg-[#23344d] p-4 hover:scale-[1.1]'><HiPhoneMissedCall/></div>
                    <div className='text-3xl my-20px mx-10px cursor-pointer rounded-full bg-red-500 p-5 hover:scale-[1.1]'><FiPhoneCall/></div>
                    <div className='text-2xl my-20px mx-10px cursor-pointer rounded-full bg-[#23344d] p-4 hover:scale-[1.1]'><AiFillAudio/></div>
                    <div className='text-2xl my-20px mx-10px cursor-pointer rounded-full bg-[#23344d] p-4 hover:scale-[1.1]'><MdOutlineScreenShare/></div>
                </div>
                </div>
            </div>
            <div className='basis-4/12 flex justify-center h-screen ml-12'>
                <div className='pt-[30px] pr-[40px] pb-[50px] pl-[50px] bg-[#182842]'>
                    <div className='grid grid-cols-1 gap-4 p-4'>
                        <img className="rounded-xl w-[300px] h-[180px]" src="pic2.png" alt="" />
                        <img className="rounded-xl w-[300px] h-[180px]" src="pic3.png" alt="" />
                        <img className="rounded-xl w-[300px] h-[180px]" src="pic4.png" alt="" />
                        <div className="rounded-xl w-[280px] h-[180px] border-gray-50 border"><div className='flex justify-center text-4xl p-6'><BsPeopleFill/></div><div className='flex justify-center'>Other Participants</div></div>
                        {/* <img className="rounded-xl w-[350px] h-[200px]" src="pic5.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default meetNav