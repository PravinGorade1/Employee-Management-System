import React, { useState } from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddnewEmployee from "./AddnewEmployee";
import DisplayAllE from "./DisplayAllE";
import Search from "./Search";
let Navbar = () => {

    let [list, setList] = useState([]);
    let handlerCallback = (cData) => {
        setList((prevList) => [...prevList, ...cData]);
    };
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3"><NavLink className="nav-link" to="/AddnewEmployee">Add Employee</NavLink></li>
                        <li className="nav-item mx-3"><NavLink className="nav-link" to="/DisplayAllE">View All Employee</NavLink></li>
                        <li className="nav-item mx-3"><NavLink className="nav-link" to="/Search">Search</NavLink></li>
                        
                    </ul>

                </nav>
                <Routes>
                    <Route path="/AddnewEmployee" element={<AddnewEmployee parentCallBack={(data) => handlerCallback(data)} />} ></Route>
                    <Route path="/DisplayAllE" element={<DisplayAllE Questionlist={list} />} ></Route>
                     <Route path="/Search" element={<Search Emplist={list}/>} ></Route>
                    
                </Routes>
            </BrowserRouter>
        </>);
};
export default Navbar;
