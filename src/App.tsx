import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import TipsEstilo from './pages/TipsEstilo';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<SobreNosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/tips" element={<TipsEstilo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;