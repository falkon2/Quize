import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'
import  Jdenticon  from 'react-jdenticon';
export default function ProfileTeacher() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const name = localStorage.getItem('name')
    return (
    <body class=" antialiased">
        <div className="flex h-screen overflow-y-hidden bg-gradient-to-tl from-sky-100 to-blue-200 font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 z-20 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          <div className=' w-screen h-screen flex flex-rows-2 '>
            <div className='w-full h-full text-center items-center justify-center flex  '>
              <div className='self-center mr-32 justify-center '>
                <div className='bg-white mx-5 p-7 rounded-full'>
                <Jdenticon value={name} size={256} />
                </div>
                <div className='text-2xl py-11 my-5 rounded-xl bg-slate-500'>{`${name}`}<br/>Teacher</div>
              </div>
            </div>
 
          </div>
          </div>
        

      </div>
      
    </body>
  )
}
