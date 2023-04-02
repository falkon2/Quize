import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'
import  Jdenticon  from 'react-jdenticon';
export default function Profile() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const name = localStorage.getItem('name')
    return (
    <body class=" antialiased">
        <div className="flex h-screen overflow-y-hidden bg-gradient-to-tl from-slate-200 to-slate-200 font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 z-20 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          <div className=' w-screen h-screen flex grid-rows-2 text-4xl'>
            <div className='w-full h-full text-center items-center justify-center pr-[15%] flex bg-blue-500 '>
              hi
            </div>
            <div  className='w-full h-full text-center items-center justify-center pr-[15%] flex bg-black '>
              hello
            </div>
          </div>
        

      </div>
      
    </body>
  )
}
