import React from 'react';
import NavBar from '../components/NavBar'

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
                <h1>hello there</h1>
            </div>
        )
    }
}
  