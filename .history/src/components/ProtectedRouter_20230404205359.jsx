import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import StudentDashboardPage from '../pages/StudentDashboardPage'
export default function ProtectedRouter() {
  
    const role = localStorage.getItem("role")

    
        if(role==="Teacher") {
            return <AdminDashboardPage />
        }
        else if(role==="Student") {
            return <StudentDashboardPage />
        }
        return (
            <Navigate to="/login" />
        )
  
}
