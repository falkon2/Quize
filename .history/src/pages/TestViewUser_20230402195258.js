//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBarUsers from '../components/SideBarUsers';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import DashboardTests from '../components/dashboard/DashboardTests';

export default function TestViewUser() {

  const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
      <div className="flex h-screen overflow-hidden bg-gradient-to-tl from-primary to-secondary font-poppins">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <SideBarUsers sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />
                  
                  <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <DashboardAvatars />
                    
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    
                    </div>
                  </div>
                  <div className="grid grid-cols-20 gap-6">
                    <DashboardTests />
                  </div>
                </div>
            </main>
        </div>
      </div>        
    )
}