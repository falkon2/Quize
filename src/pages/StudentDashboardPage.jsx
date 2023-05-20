//StudentDashboardPage.js: Page for displaying the student dashboard.
//StudentDashboardPage.js: Page for displaying the student dashboard.

import React from 'react'
import NavBar from '../components/NavBar';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import DashboardList from '../components/dashboard/DashboardList';
import DashboardTests from '../components/dashboard/DashboardTests';

export default function StudentDashboardPage() {

  
  const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
      <div className="flex h-screen overflow-hidden bg-[cbd5e1] font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <SideBar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./user-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />
                  
                  <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <DashboardAvatars />
                    
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <DashboardList />
                    <DashboardTests e={false}/>
                  </div>
                </div>
            </main>
        </div>
      </div>        
    )
}


