import React from 'react';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar';
export default class TestView extends React.Component {

    constructor() {
      super();
  
      this.state = {
        user: ""
      }
    }
    render() {
        return(
            <div>
                <NavBar />
                <SideBar />
                <h1>hello there</h1>
            </div>
        )
    }
}
  