//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.

import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import DashboardList from '../components/dashboard/DashboardList';
import DashboardStudent from '../components/dashboard/DashboardStudent';
// import $ from "jquery"

export default function AdminDashboardPage() {

  
  const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
      <div className="flex h-screen overflow-hidden bg-gradient-to-tl from-primary to-secondary">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link={'./admin-dashboard'} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />
                  
                  <div className="sm:flex sm:justify-between sm:items-center mb-8">
                    <DashboardAvatars />
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
