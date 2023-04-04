import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import StudentDashboardPage from '../pages/StudentDashboardPage'
export default function ProtectedRouter({children}) {
  
    const role = localStorage.getItem("role")

    
        if(!role==="Teacher") {
            return <Navigate to="/" />
        }
        
        return children
  
}
