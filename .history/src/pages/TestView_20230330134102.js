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
                <SideBar />
                <h1>hello there</h1>
            </div>
        )
    }
}
  