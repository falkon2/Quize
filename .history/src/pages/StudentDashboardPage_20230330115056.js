//StudentDashboardPage.js: Page for displaying the student dashboard.
//StudentDashboardPage.js: Page for displaying the student dashboard.

import React from 'react'
import NavBar from '../components/NavBar';

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      link: "/student-dashboard"
    }
  }
render() {
  return(
<div>
  <NavBar link={this.link} />
  StudentDashboardPage
</div>
    )
  }
}

