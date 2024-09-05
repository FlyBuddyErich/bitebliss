import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </Router>

)
