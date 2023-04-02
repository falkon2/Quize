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
        <div className="flex h-screen overflow-y-hidden bg-gradient-to-tl from-sky-100 to-blue-200 font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 z-20 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          <div className=' w-screen h-screen flex flex-rows-2 text-4xl'>
            <div className='w-full h-full text-center items-center justify-center flex  '>
              <div className='self-start'>
                <img src="https://avatars.githubusercontent.com/u/94387470?s=400&u=a922349ca8f84b511918ed32b37bccd78ac80e60&v=4" width={256} height={256} />
              </div>
            </div>
            <div  className='w-full h-full text-center items-center justify-center flex  '>
              hello
            </div>
          </div>
          </div>
        

      </div>
      
    </body>
  )
}
