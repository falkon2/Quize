import React from 'react'
import $ from "jquery"
import AdminLoginPage from './pages/AdminLoginPage'
// import StudentLoginPage from './pages/StudentLoginPage'
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
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Quize</h1>
      <p className="mb-5">Join us today to experience the extraordinary world of mathematics. In a simplistic fun manner.</p>
      <Link to="Login"><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    )
  }
}