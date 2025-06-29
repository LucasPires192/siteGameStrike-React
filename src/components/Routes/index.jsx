import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../../pages/Home.jsx';
import About from '../../pages/About.jsx';
import MyGames from '../../pages/MyGames.jsx';
import Admin from '../../pages/Admin.jsx';
import Navbar from '../Navbar'; // se tiver o componente de navegação

export default function MyRoutes() {
    const links = [
        {
            component: Home,
            url: '/Home'
        },
        {
            component: About,
            url: '/About'
        },
        {
            component: MyGames,
            url: 'MyGames'
        },
        {
            component: Admin,
            url: 'Admin'
        }
    ];
    return (
        <BrowserRouter>
            <Navbar /> {/* ou seu layout fixo */}
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/MyGames" element={<MyGames />} />
                <Route path="/Admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}
