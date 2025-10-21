import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Love1 from './Pages/Love1'
import Love2 from './Pages/Love2'
import Love3 from './Pages/Love3'
import Loader from './Loader'
const App = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay or wait for actual content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // You can adjust this or remove once you use real loading logic

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Love1/>}/>
          <Route path='love1' element={<Love1/>}/>
          <Route path='love2' element={<Love2/>}/>
          <Route path='love3' element={<Love3/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
