import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
export const RedBeanBun = () => {
    
    return (
        <div>
            <img src="https://i.pinimg.com/originals/68/55/59/6855594ebf86d152b5544475c7ab37e4.gif" />   
            
            <NavLink exact to="/">
                Vending Machine
            </NavLink>
        </div>
        
    )
}