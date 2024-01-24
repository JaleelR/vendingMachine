import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VendingMachine } from './VendingMachine';
import { BubbleTea } from "./BubbleTea.js"
import { Popcorn } from "./Popcorn.js"
import { RedBeanBun } from "./RedBeanBun.js"
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./NavBar.js";
function App() {
  return (
    <div className="App">
   <VendingMachine/>
    </div>
  );
}

export default App;
