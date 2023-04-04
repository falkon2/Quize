import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRouterStudent() {
    const role = localStorage.getItem("role")

    return(
        role==="Student" ? <Outlet /> : <Navigate to="/login" />
    )
}
