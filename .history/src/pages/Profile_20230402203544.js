import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'
import  Jdenticon  from 'react-jdenticon';
export default function Profile() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const name = localStorage.getItem('name')
    return (
    <body class="bg-gray-300 antialiased">
        <div className="flex h-screen overflow-y-hidden bg-gradient-to-tl from-slate-200 to-slate-200 font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
            <div className="w-screen">
              <div className='w-1/2 bg-slate-900'>
                hii
              </div>
              <div className='w-1/2 bg-red-600'>

              
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
