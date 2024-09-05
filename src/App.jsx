import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';
import LoginPopup from './components/loginPopup/LoginPopup';
import Presentation from './pages/Presentation/Presentation';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Navbar setShowLogin={setShowLogin} />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="app">
              <Navbar setShowLogin={setShowLogin} />
              <Cart />
              <Footer />
            </div>
          }
        />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </>
  );
};

export default App;