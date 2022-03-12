
import HomePage from "./Components/HomePage/HomePage";
import React from 'react';
import DarkMode from "./DarkMode";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import BookListPage from "./Components/BookListPage/BookListPage";


function App() {

  
  return (
    <div>
      <BrowserRouter>
      <DarkMode></DarkMode>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage />}></Route>
        <Route path="/search/:bookID" element = {<BookListPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;