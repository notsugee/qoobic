/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Widget } from "./components/Widget";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
