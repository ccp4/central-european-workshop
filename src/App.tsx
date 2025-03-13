import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { Apply } from "./pages/Apply";
import { Contact } from "./pages/Contact";
import { Edi } from "./pages/Edi";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Location } from "./pages/Location";
import { Programme } from "./pages/Programme";
import { Tutors } from "./pages/Tutors";

import "./App.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="apply" element={<Apply />} />
        <Route path="contact" element={<Contact />} />
        <Route path="edi" element={<Edi />} />
        <Route path="location" element={<Location />} />
        <Route path="programme" element={<Programme />} />
        <Route path="tutors" element={<Tutors />} />
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>,
);
