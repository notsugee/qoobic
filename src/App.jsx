/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import BookSearch from "./pages/BookSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import MyLibrary from "./pages/MyLibrary";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendation" element={<BookSearch />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mylibrary" element={<MyLibrary />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
