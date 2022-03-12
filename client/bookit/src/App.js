
import HomePage from "./Components/HomePage/HomePage";
import React from 'react';
import DarkMode from "./DarkMode";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


function App() {

  
  return (
    <div>
      <BrowserRouter>
      <DarkMode></DarkMode>
      <Routes>
        
        <Route path="/" element={ <HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;