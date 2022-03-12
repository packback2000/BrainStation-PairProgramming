
import HomePage from "./Components/HomePage/HomePage";
import React from 'react';
import DarkMode from "./DarkMode";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import BookListPage from "./Components/BookListPage/BookListPage";
import ListView from "./Components/ListView/ListView";

function App() {

  return (
    <div>
      <BrowserRouter>
      <DarkMode></DarkMode>
      <Header />
      <Routes>
      
        <Route path="/" element={ <HomePage />}></Route>
        <Route path="/search/:bookID" element = {<BookListPage /> } />
        <Route path="/searchTest" element = {<ListView />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;