import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Gestion from './pages/Gestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gestion" element={<Gestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
