import React from 'react'
 
import { BrowserRouter as  Router,Routes, Route} from "react-router-dom";
import Rent from './Component/Rent';
import Buy from './Component/Buy';
import Sell from './Component/Sell';
import ManageProperty from './Component/ManageProperty';
import Resources from './Component/Resources';
import Nav from './Navbar/Nav';
import Map from './Component/Map'
export default function App() {
  return (
    
    <>
    
  <Router>
  <Nav/> 
    <Map/>
    <Routes>
          <Route path="/"  element={<Rent/>} />
          <Route path="/Buy" element={<Buy/>} />
          <Route path="/Sell" element={<Sell/>} />
          <Route path="/Manage" element={<ManageProperty/>} />
          <Route path="/Resources" element={<Resources/>} />
    </Routes>
  
    </Router>
    </>
  )
}
