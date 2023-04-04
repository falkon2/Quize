import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import StudentDashboardPage from '../pages/StudentDashboardPage'
export default function ProtectedRouter({children}) {
  
    const role = localStorage.getItem("role")

    return(
        role==="Teacher" ? <Outlet/> : <Navigate to="/login" />,
        role==="Student" ? <Outlet/> : <Navigate to="/login" />
    )
  
}
