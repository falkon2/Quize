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
<div className="hero min-h-screen" >
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to="Login"><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    )
  }
}