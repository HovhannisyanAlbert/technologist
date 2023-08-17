import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Technologist from "./components/technologist";
import DateRange from "./components/dateRange";
import CardUser from "./components/cardUser";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Technologist />}>
           <Route path="daterange" element={<DateRange />} />

          <Route path="carduser" element={<CardUser />} />
        </Route>
     </Routes>
     </BrowserRouter>
  
  );
}

export default App;
