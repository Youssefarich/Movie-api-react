import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Teatre from "./pages/Teatre";
import Kids from "./pages/Kids";
import Drama from "./pages/Drama";
import Comedie from "./pages/Comedie";
import Navbar from "./components/Sear";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="teatre" element={<Teatre/>} />
          <Route path="kids" element={<Kids/>} />
          <Route path="drama" element={<Drama/>} />
          <Route path="comedie" element={<Comedie/>} />
          <Route path="sear" element={<Navbar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



