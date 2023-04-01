//AdminDashboardPage.js: Page for displaying the admin/teacher dashboard.

import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
// import $ from "jquery"

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      link: "/admin-dashboard"
    }
  }


  render() {
    return (
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <NavBar link={this.state.link} />
        </div>
      </div>        
    )
  }
}
