import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Love1 from "./Pages/Love1";
import Love2 from "./Pages/Love2";
import Love3 from "./Pages/Love3";
import Loader from "./Loader";
import Login from "./Pages/Login";
import { preloadImages } from "./utils/preloadImages";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

useEffect(() => {
  // 🧠 Automatically import *all images and gifs* from /assets and /Images
  const imageModules = {
    ...import.meta.glob("./assets/**/*.{jpg,jpeg,png,svg,gif}", { eager: true }),
    ...import.meta.glob("./Images/**/*.{jpg,jpeg,png,svg,gif}", { eager: true }),
  };

  const imagePaths = Object.values(imageModules).map((mod) => mod.default);

  // Preload all found images
  preloadImages(imagePaths).then(() => {
    setTimeout(() => setLoading(false), 1000);
  });
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
