import React, { useState } from "react";
import { BubbleTea} from "./BubbleTea.js"
import { Popcorn} from "./Popcorn.js"
import { RedBeanBun } from "./RedBeanBun.js"
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./NavBar.js";
import { useRef } from "react";
export const VendingMachine = () => { 

    const [urlChange, useUrlChange] = useState(window.location.href); 
    // const myRef = useRef(window.location.href);
    // const url = myRef.current;
    // const OnChange = () => {
    //     console.log(url)
    // }
    return (
        <div>
            <h1>Hello</h1>
         
            
            <BrowserRouter>
                <NavBar /> 
                <Route exact path="/BubbleTea">
                <BubbleTea/>
                </Route>

                <Route exact path="/Popcorn">
                 <Popcorn/>
                </Route>

                <Route exact path="/RedBeanBun">
                 <RedBeanBun />
                </Route> 
            </BrowserRouter>
       
        </div>
    )
}