import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRouter({children}) {
  
    const role = localStorage.getItem("role")

    return(
        role==="Teacher" ? <Outlet /> : <Navigate to="/login" />
    )
  
}
