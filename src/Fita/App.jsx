import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Topbar from './startbar/Topbar';
import Slides from "./Slider/Slides";
import Register from './student/Register';
import Applier from './recruiter/Applier';
 
import Card from './admin/Card'


export default function Main()
{
    return(
        <>

        <BrowserRouter>

        <Routes>
       
            <Route path="/" element={<Topbar /> } />
            <Route path="/slides" element={<Slides />} />
            <Route path="/register" element={<Register />} />
            <Route path="/applier" element={<Applier />} />
            <Route path="/admin" element={<Card />} />

            
        </Routes>

        </BrowserRouter>
        
        
        </>
    )
}








