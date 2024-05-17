import React from 'react';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate(); 
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  
  return (
    <>
    <div>welcome to Dashboard</div>
    <button className="btn link-danger mx-4" onClick={handleLogout}>
      Logout
    </button>
    </>
  )
}

export default Dashboard