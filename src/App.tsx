import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { Accommodation } from "./pages/Accommodation";
import { Apply } from "./pages/Apply";
import { Contact } from "./pages/Contact";
import { Edi } from "./pages/Edi";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Location } from "./pages/Location";
import { Programme } from "./pages/Programme";
import { Social } from "./pages/Social";

import "./App.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="programme" element={<Programme />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="location" element={<Location />} />
        <Route path="social" element={<Social />} />
        <Route path="edi" element={<Edi />} />
        <Route path="contact" element={<Contact />} />
        <Route path="apply" element={<Apply />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
