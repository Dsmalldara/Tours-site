import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import { Route, Routes } from 'react-router-dom';
function App(){
  return (<div>
    <div>
    <div><Navbar/></div>
    </div>
   <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
   </div>
  )
}
export default App;