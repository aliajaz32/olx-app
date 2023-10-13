import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
  Outlet
  } from "react-router-dom";
  import Detail from './Components/Detail';
import Sell from './Components/Sell';
import AuthComponent from './Components/AuthComponent'; 
import Dashboard from './Components/Dashboard'  ;
import { useNavigate } from 'react-router-dom' ;
import { useSelector } from 'react-redux';


function Navigation() {
  const user = useSelector(state => state.user)
  // const user =  'asd'
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AuthRoutes  user={user}  />}>
       <Route path="/sell" element={<Sell />} />
      </Route>
      <Route path="/" element={<AuthComponent />} />
      <Route path="/register" element={<AuthComponent />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detail/:adId" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  )
}

const AuthRoutes = ({ user }) => {
  if (!user) {
    return <Navigate to="/" />
  }

  return <Outlet /> //Child componet, path="/profile"
}

export default Navigation