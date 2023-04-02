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
          
          <div className=' w-screen h-screen flex flex-rows-2 '>
            <div className='w-1/2 h-full text-center items-center justify-center flex  '>
              <div className='self-start py-44 justify-start '>
                <div className='bg-white mx-5 p-7 rounded-full'>
                <Jdenticon value={name} size={256} />
                </div>
                <div className='text-2xl py-11 my-5 rounded-xl bg-slate-500'>{`${name}`}<br/>Class X-B</div>
              </div>
            </div>
            <div  className='w-full h-full text-center items-center justify-center flex  '>
            <div className='self-center my-44 justify-center mr-44 '>
            <div className="overflow-x-auto">
  <table className="table w-full justify-start align-top">
    {/* head */}
    <thead>
      <tr className="hover">
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="hover">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr className="hover">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
              </div>
            </div>
          </div>
          </div>
        

      </div>
      
    </body>
  )
}
