import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useState, useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { VendingMachine } from "./VendingMachine";

export const NavBar = () => {
    const url = 'http://localhost:3000/';
    

    return (
        <div>

  
        { url === window.location.href ? (<nav  className="NavBar">
            <NavLink exact to="/BubbleTea">
                Bubble Tea
            </NavLink>
            <NavLink exact to="/Popcorn">
                Popcorn
            </NavLink>
            <NavLink exact to="/RedBeanBun">
                Red Bean Bun
            </NavLink>
            </nav >) :
               (<BrowserRouter>
                    <NavLink exact to="/">  Home</NavLink>  
                    <Route exact path="/"> <VendingMachine/> </Route>
               </BrowserRouter> )
          
          
                }
    </div>  
    );
}