//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.
//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.

import React from 'react'
import NavBar from '../components/NavBar'
export default function AdminDashboardPage() {
  return (
    <div className='bg-cover '>
    <div src="/images/stock/photo-1635805737707-575885ab0820.jpg" className='max-w-full max-h-full' alt="Movie">
      
      <NavBar />

      <div className='text-2xl self-center text-center'>
      Admin Dashboard
      </div>

<div className='p-4 static'>
  <div class="max-w-1/2 ml-px bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/2249961/pexels-photo-2249961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern building architecture" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Teacher Name</div>{/* teachers name *dynamic* */}
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">classes:</a>{/*Classes */}
      <p class="mt-2 text-slate-500">Students:</p>
    </div>
  </div>
</div>
  </div>
</div>
</div>
  )
}
