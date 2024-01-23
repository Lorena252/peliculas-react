import { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lanzamientos from "./components/Lanzamientos";
import Populares from "./components/Populares";
import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DetailMovie from "./components/DetailMovie";


function App() {

  

  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lanzamientos" element={<Lanzamientos/>} />
        <Route path="/populares" element={<Populares/>} />
        <Route path="/buscar" element={<Search bg="pink"/>} />
        <Route path="/detail" element={<DetailMovie/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
    
}

export default App;