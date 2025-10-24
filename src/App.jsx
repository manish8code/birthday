import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Love1 from './Pages/Love1';
import Love2 from './Pages/Love2';
import Love3 from './Pages/Love3';
import Loader from './Loader';
import Login from './Pages/Login'; // ✅ import your separate login page

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  // When user logs in, show loader for 3s, then app
  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  // ✅ Handle login event from Login.jsx
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // persist login
    setIsLoggedIn(true);
  };

  // ✅ Step 1: Show login first
  if (!isLoggedIn) return <Login onLogin={handleLogin} />;

  // ✅ Step 2: Show loader after login
  if (loading) return <Loader />;

  // ✅ Step 3: Show your app
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




// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Love1 from './Pages/Love1';
// import Love2 from './Pages/Love2';
// import Love3 from './Pages/Love3';
// import Loader from './Loader';
// import Login from './Pages/Login'; // ✅ using your separate login page

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     if (isLoggedIn) {
//       setLoading(true);
//       const timer = setTimeout(() => {
//         setLoading(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isLoggedIn]);

//   // ✅ Step 1: Always show login first
//   if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

//   // ✅ Step 2: Show loader after login
//   if (loading) return <Loader />;

//   // ✅ Step 3: Show main app
//   return (
//     <Router>
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
