// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import Love1 from "./Pages/Love1";
// import Love2 from "./Pages/Love2";
// import Love3 from "./Pages/Love3";
// import Loader from "./Loader";
// import Login from "./Pages/Login";
// import ScrollToTop from "./ScrollToTop";

// // ✅ Fonts
// import "@fontsource/antonio";
// import "@fontsource/pinyon-script";
// import "@fontsource/playfair-display";
// import "@fontsource/poppins";

// // ✅ Import your background images and GIFs here
// import bg from "./assets/bg.jpeg";


// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("isLoggedIn") === "true"
//   );

//   useEffect(() => {
//     const preloadAssets = async () => {
//       try {
//         // 🖼️ Preload background and GIF images
//         const images = [bg];
//         const imagePromises = images.map(
//           (src) =>
//             new Promise((resolve, reject) => {
//               const img = new Image();
//               img.src = src;
//               img.onload = resolve;
//               img.onerror = reject;
//             })
//         );

//         // 🧠 Wait until all fonts + images are ready
//         await Promise.all([document.fonts.ready, ...imagePromises]);

//         console.log("✅ Fonts & images preloaded");
//       } catch (err) {
//         console.error("Preload error:", err);
//       } finally {
//         // Add small delay for smoother transition
//         setTimeout(() => setLoading(false), 800);
//       }
//     };

//     preloadAssets();
//   }, []);

//   const handleLogin = () => {
//     localStorage.setItem("isLoggedIn", "true");
//     setIsLoggedIn(true);
//   };

//   if (loading) return <Loader />;
//   if (!isLoggedIn) return <Login onLogin={handleLogin} />;

//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Love1 />} />
//           <Route path="love1" element={<Love1 />} />
//           <Route path="love2" element={<Love2 />} />
//           <Route path="love3" element={<Love3 />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;








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
import bg from "./assets/bg.jpeg";
import { preloadImages } from "./utils/preloadImages";
import ScrollToTop from "./ScrollToTop";

// ✅ Import @fontsource packages so CSS is available
import "@fontsource/antonio";
import "@fontsource/pinyon-script";
import "@fontsource/playfair-display";
import "@fontsource/poppins";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const preloadAll = async () => {
      try {
        // 🧠 STEP 1: Preload loader-related images first
        const loaderImages = [load1, load2, load3];
        await preloadImages(loaderImages);

        // 🧠 STEP 2: Preload fonts (from node_modules/@fontsource)
        const fontFiles = [
          // Antonio
          new URL("@fontsource/antonio/files/antonio-latin-400-normal.woff2", import.meta.url).href,
          // Pinyon Script
          new URL("@fontsource/pinyon-script/files/pinyon-script-latin-400-normal.woff2", import.meta.url).href,
          // Playfair Display (regular + bold)
          new URL("@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2", import.meta.url).href,
          new URL("@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff2", import.meta.url).href,
          // Poppins (regular + medium + bold)
          new URL("@fontsource/poppins/files/poppins-latin-400-normal.woff2", import.meta.url).href,
          new URL("@fontsource/poppins/files/poppins-latin-500-normal.woff2", import.meta.url).href,
          new URL("@fontsource/poppins/files/poppins-latin-700-normal.woff2", import.meta.url).href,
        ];

        const fontPromises = fontFiles.map((url) => {
          const fontName = url.split("/").slice(-1)[0]; // simple label
          const font = new FontFace(fontName, `url(${url})`);
          return font.load().then((loadedFont) => {
            document.fonts.add(loadedFont);
          });
        });

        await Promise.all(fontPromises);
        console.log("✅ Fonts preloaded");

        // 🧠 STEP 3: Preload all app images
        const imageModules = {
          load1,load2,load3,bg
          //...import.meta.glob("./assets/**/*.{jpg,jpeg,png,svg,gif}", { eager: true }),
         // ...import.meta.glob("./Images/**/*.{jpg,jpeg,png,svg,gif}", { eager: true }),
        };

        const imagePaths = Object.values(imageModules)
          .map((mod) => mod?.default)
          .filter(Boolean);

        await preloadImages(imagePaths);
        console.log("✅ All images preloaded");
      } catch (err) {
        console.error("Error preloading assets:", err);
      } finally {
        // small delay for smoother transition
        setTimeout(() => setLoading(false), 1500);
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
      <ScrollToTop />   {/* ✅ Always resets scroll on route change */}
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
