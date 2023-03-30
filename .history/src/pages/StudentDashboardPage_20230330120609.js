//StudentDashboardPage.js: Page for displaying the student dashboard.
//StudentDashboardPage.js: Page for displaying the student dashboard.

import React from 'react'
import NavBar from '../components/NavBar';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      link: "/user-dashboard"
    }
  }
render() {
  return(
<div>
  <NavBar link={this.state.link} />
  <body>
    Hello
  </body>
</div>
    )
  }
}

