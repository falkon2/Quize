import React from 'react'

export default function ProtectedRouterStudent() {
    const role = localStorage.getItem("role")

    return(
        role==="Student" ? <Outlet /> : <Navigate to="/login" />
    )
}
