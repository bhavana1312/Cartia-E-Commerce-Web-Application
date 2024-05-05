import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screens
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { CartScreen } from "./screens/CartScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { DownloadScreen } from "./screens/DownloadScreen";
//Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/download" element={<DownloadScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
