import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";




export default function ProtectedRoute({children}) {
    const {user, loading} = useAuth();

    if(loading) return <h1>loading</h1>;

    if(!user) return <Navigate to='/' />;

    return <>{children}</>;
}