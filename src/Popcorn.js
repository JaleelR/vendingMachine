import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
export const Popcorn = () => {

    return (
        <div>
                 <img src="https://64.media.tumblr.com/d7437377bdc5d2b706bb5359787b760d/tumblr_nsl0uoVuLo1txeruoo1_r3_500.gifv"/>        
            <NavLink exact to="/">
                Vending Machine
            </NavLink>
        </div>

      
    )
}