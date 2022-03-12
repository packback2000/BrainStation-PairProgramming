
import HomePage from "./Components/HomePage/HomePage";
import React from 'react';
import DarkMode from "./DarkMode";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import BookListPage from "./Components/BookListPage/BookListPage";

function App() {

  
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={ <HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;