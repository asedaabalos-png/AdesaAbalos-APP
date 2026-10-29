import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/header";
import Footer from "./Footer/Footer";

import Home from "./assets/Home";
import Gallery from "./assets/Gallery";
import Contacts from "./assets/Contacts";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="Contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
} 