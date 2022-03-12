
import HomePage from "./Components/HomePage/HomePage";
import React from 'react';
import DarkMode from "./DarkMode";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import BookListPage from "./Components/BookListPage/BookListPage";
import ListView from "./Components/ListView/ListView";
import FilteredList from "./Components/FilteredList/FilteredList";

function App() {

  return (
    <div>
      <BrowserRouter>
      <DarkMode></DarkMode>
      <Header />
      <Routes>
      
        <Route path="/" element={ <ListView />}></Route>
        <Route path="/search/:bookID" element = {<BookListPage /> } />
        <Route path="/searchTest" element = {<ListView />} />
        <Route path='/search/StephenKing' element={<HomePage />} />
        <Route path="/filterTest" element = {<FilteredList />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;