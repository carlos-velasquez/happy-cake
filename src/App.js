import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/Contacto" element={<Contacto />} />;
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
