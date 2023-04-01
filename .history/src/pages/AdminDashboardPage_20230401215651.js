//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.

import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import DashboardList from '../components/dashboard/DashboardList';
import DashboardStudent from '../components/dashboard/DashboardStudent';

export default function AdminDashboardPage() {

  
  const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
      <div className="flex h-screen overflow-hidden bg-gradient-to-tl from-primary to-secondary font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />
                  
                  <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <DashboardAvatars />
                    
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-secondary  -ml-1 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create New Quiz
                  </button></div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <DashboardList />
                    <DashboardStudent />
                  </div>
                </div>
            </main>
        </div>
      </div>        
    )
}
