import React from 'react';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar';
export default class TestView extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        user: "",
        link: '/admin-dashboard'
      }
    }
    render() {
        return(
            <div>
                <NavBar link={this.state.link} />
                <body data-theme="night" class="flex bg-gray-100 min-h-screen overflow-hidden">
                <SideBar />
                <h1>hello there</h1>
                </body>
            </div>
        )
    }
}
  