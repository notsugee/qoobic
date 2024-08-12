/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Widget } from "./components/Widget";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import BookSearch from "./pages/BookSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendation" element={<BookSearch />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
