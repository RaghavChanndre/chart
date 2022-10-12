import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Side from "./Components/Sidebar/Side";

import Dashboard from "./Components/Dashboard/Dashboard";
import Log from "./Components/Logout/Log";
import Task from "./Components/Task/Task";
import Contact from "./Components/Contact/Contact";
import {Routes,Route, } from "react-router-dom";

function App() {
  return (
  
    <>
<div className="">
    <Navbar/>
    <div className="row">
        <div className="col-sm-2">
            <Side/>
        </div>
        <div className="col-sm-10 my-5">
            <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/task" element={<Task/>}/>
            <Route path="/logout" element={<Log/>} />
           </Routes>
          
           </div>
    </div>
    <Footer/>
</div>
       
    </>
    
           
   
    
  );
}
export default App;
