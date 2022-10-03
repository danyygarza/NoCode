import React from 'react'
import { useAuth } from '../../context/authContext'


export default function Inicio() {
  const { user, logout, loading } = useAuth();
  
  console.log(user);
  
  const handleLogout = async () => {
    await logout();
  }

  if(loading) {
    return <h1>loading</h1>
  }

  return (
    <>
      <h1>Welcome {user.email}</h1>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

