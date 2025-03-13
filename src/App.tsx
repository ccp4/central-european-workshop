import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Programme } from "./pages/Programme";
import { Nav } from "./components/Nav";

const root = document.getElementById("root")!;

createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <Nav />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="programme" element={<Programme />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
