import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Topbar from './startbar/Topbar';
import Register from './student/Register';
import Applier from './recruiter/Applier';

export default function Main()
{
    return(
        <>

        <BrowserRouter>

        <Routes>
       
            <Route path="/" element={<Topbar /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/applier" element={<Applier />} />
            
        </Routes>

        </BrowserRouter>
        
        
        </>
    )
}








