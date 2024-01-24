import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
export const BubbleTea = () => {

    return (
        <div>
          <img src= "https://media0.giphy.com/media/5YhM7FikN75SXkbInU/giphy.gif?cid=82a1493by7yti1v1zm02ty1yiabw38oci8qbny11ixbh0y18&ep=v1_gifs_search&rid=giphy.gif&ct=g"/> 
       <NavLink exact to="/">
                Vending Machine
            </NavLink>
        </div>
         
    )
}