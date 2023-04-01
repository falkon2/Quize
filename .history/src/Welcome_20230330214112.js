import React from 'react'
import $ from "jquery"
import { Link } from 'react-router-dom';
import './styles/theme.css'


export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      user: ""
    }
  }

  loadLogin = () => {
    $(".login").attr("style", 'visibility: visible')
  }


  render() {
    return (
      <div className="hero min-h-screen">
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-secondary">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Quiz</h1>
            <p className="mb-5">Join us today to experience the extraordinary world of mathematics. In a simplistic fun manner.</p>
            <Link to="Login"><button className="btn bg-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    )
  }
}