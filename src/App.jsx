import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Love1 from "./Pages/Love1";
import Love2 from "./Pages/Love2";
import Love3 from "./Pages/Love3";
import Loader from "./Loader";
import Login from "./Pages/Login";
import load1 from "./assets/load1.svg";
import load2 from "./assets/load2.svg";
import load3 from "./assets/load3.svg";
import { preloadImages } from "./utils/preloadImages";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const preloadAll = async () => {
      try {
        // 🧠 STEP 1: Preload loader-related images first (so loader shows instantly)
        const loaderImages = [load1, load2, load3];
        await preloadImages(loaderImages);

        // 🧠 STEP 2: Eagerly import *all* app images and GIFs
        const imageModules = {
          ...import.meta.glob("./assets/**/*.{jpg,jpeg,png,svg,gif}", { eager: true }),
          ...import.meta.glob("./Images/**/*.{jpg,jpeg,png,svg,gif}", { eager: true }),
        };

        const imagePaths = Object.values(imageModules)
          .map((mod) => mod?.default)
          .filter(Boolean); // prevent undefined values

        // 🧠 STEP 3: Preload remaining app images
        await preloadImages(imagePaths);
      } catch (err) {
        console.error("Error preloading images:", err);
      } finally {
        // 🧠 Delay slightly for smoother transition (optional)
        setTimeout(() => setLoading(false), 800);
      }
    };

    preloadAll();
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  if (loading) return <Loader />;
  if (!isLoggedIn) return <Login onLogin={handleLogin} />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Love1 />} />
          <Route path="love1" element={<Love1 />} />
          <Route path="love2" element={<Love2 />} />
          <Route path="love3" element={<Love3 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
