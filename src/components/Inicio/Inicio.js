import React from 'react'
import { useAuth } from '../../context/authContext'


//components
import Navbar from '../Shared/Navbar';

export default function Inicio() {
  const { user, logout, loading } = useAuth();
  
  console.log(user);
  
  const handleLogout = async () => {
    try{
      await logout();
    }catch(error){
      console.log(error);
    }
  };

  if(loading) {
    return <h1>loading</h1>
  }

  return (
    <>
     <p>Welcome {user.displayName || user.email}</p>
     <button onClick={handleLogout}>logout</button>
    </>
  )
}
/*
<p>Welcome {user.displayName || user.email}</p>
<button onClick={handleLogout}>logout</button>

*/