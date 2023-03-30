//StudentDashboardPage.js: Page for displaying the student dashboard.
//StudentDashboardPage.js: Page for displaying the student dashboard.

import React from 'react'
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
  <NavBar link={link} />
  StudentDashboardPage
</div>
  )
}
