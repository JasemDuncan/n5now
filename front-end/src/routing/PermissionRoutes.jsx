import React  from "react";
import { Routes ,Route, BrowserRouter, Navigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Index } from "../components/pages/Index";
import { Permissions } from "../components/pages/Permissions";
import { Create } from "../components/pages/Create";
import { Permission } from "../components/pages/Permission";
import { Edit } from "../components/pages/Edit";


export const PermissionRoutes = ()=>{
    return  (
        <BrowserRouter>
            {/*LAYOUT*/}
            <Header/>
            <Nav/>
            {/*Contenido central y rutas*/}
            <section id="content" className="content">
                <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/index" element={<Index/>}/>
                <Route path="/permissions" element={<Permissions/>}/>
                <Route path="/create-permissions" element={<Create/>}/>
                <Route path="/permission/:id" element={<Permission/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>

                <Route path="*" element={
                    <div><h1>Error 404</h1></div>
                }/>

                </Routes>                
            </section>

            <Footer/>
        </BrowserRouter>
    );
};  