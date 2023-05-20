import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import DashboardList from '../components/dashboard/DashboardList';
import DisplayResultsStudent from '../components/IndividualResults';

class StudentResultIND extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  setSidebarOpen = (isOpen) => {
    this.setState({ sidebarOpen: isOpen });
  };

  render() {
    const { sidebarOpen } = this.state;

    return (
      <div className="flex h-screen overflow-hidden bg-[cbd5e1] font-poppins">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={this.setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link="./admin-dashboard" sidebarOpen={sidebarOpen} setSidebarOpen={this.setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="grid grid-cols-12 gap-6">
                <DashboardList />
                <DisplayResultsStudent e={false} />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default StudentResultIND;
