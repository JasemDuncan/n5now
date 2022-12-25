import React  from "react";
import { Routes ,Route, BrowserRouter, Navigate } from "react-router-dom";
import { Index } from "../components/pages/Index";
import { Permissions } from "../components/pages/Permissions";

export const PermissionRoutes = ()=>{
    return  (
        <BrowserRouter>
            {/*LAYOUT*/}

            {/*Contenido central y rutas*/}
            <section id="content" className="content">
                <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/index" element={<Index/>}/>
                <Route path="/permissions" element={<Permissions/>}/>
                </Routes>                
            </section>
        </BrowserRouter>
    );
};