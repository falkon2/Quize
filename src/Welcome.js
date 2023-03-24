import React from 'react'
import AdminLoginPage from './pages/AdminLoginPage'
import StudentLoginPage from './pages/StudentLoginPage'
import { Link } from 'react-router-dom';


export default function Welcome() {
  return (
    <div>
      <h1>Welcome!</h1>
    <Link to="/admin-login"><button>Login as a teacher</button></Link>
    <Link to="/user-login"><button>Login as a student</button></Link>
    </div>
  )
}
