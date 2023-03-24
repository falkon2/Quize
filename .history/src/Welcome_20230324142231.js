import React from 'react'
import AdminLoginPage from './pages/AdminLoginPage'
import StudentLoginPage from './pages/StudentLoginPage'
export default function Welcome() {
  return (
    <div>
      <h1>Welcome!</h1>
    <button onClick={<AdminLoginPage/>}>Login as a teacher</button>
    <button onClick={<StudentLoginPage/>}>Login as a student</button>
    </div>
  )
}
