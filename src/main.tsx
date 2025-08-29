import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router";
import Navbar from './components/Navbar1.tsx';
import HomePage from './pages/HomePage.tsx';
import KantinPage from './pages/kantinPage.tsx';
import PerpusPage from './pages/PerpusPage.tsx';
import AkunPage from './pages/AkunPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Kantin" element={<KantinPage />} />
        <Route path="/Perpus" element={<PerpusPage />} />
        <Route path="/Akun" element={<AkunPage />} />
      </Routes>
      <Navbar />
  </BrowserRouter>,
)
