import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function PrivateComponent() {
    const auth=localStorage.getItem('user');
  return  auth ? <Outlet/> : <Navigate/>
}

export default PrivateComponent