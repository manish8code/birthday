import { StrictMode } from 'react'
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/600.css'; // Optional additional weights

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
