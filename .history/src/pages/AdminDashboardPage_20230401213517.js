//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.

import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import DashboardList from '../components/dashboard/DashboardList';
import DashboardStudent from '../components/dashboard/DashboardStudent';
import Datepicker from '../components/actions/Datepicker';
// import $ from "jquery"

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
                      <Datepicker />
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="hidden xs:block ml-2">Add view</span>
                      </button>
                    </div>
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
