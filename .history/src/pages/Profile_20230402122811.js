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
        <div class="container mx-auto my-60">
            <div>
    
                <div class="bg-white relative shadow-lg  rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div class="flex justify-center">
                    <Jdenticon class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" value={`${name}`} size={128}  />
                    </div>
                    
                    <div class="mt-16">
                        <h1 class="font-bold text-center text-3xl text-gray-900">{name}</h1>
                        <p class="text-center text-sm text-gray-400 font-medium">Teacher</p>
                        <p>
                            <span>
                                
                            </span>
                        </p>
                        <div class="my-5 px-6">
                            <a href="#" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Class X-B <span class="font-bold">Roll no-34</span></a>
                        </div>

                        <div class="w-full">
                            <h3 class="font-medium text-gray-900 text-left px-6">Recent Tests</h3>
                            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <Jdenticon value={name} size={36} />
    </div>
  </div>
  <div className="chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        </div>
        </div>
    </body>
  )
}
