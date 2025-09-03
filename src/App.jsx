import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
      <Footer />
    </div>
  );
}
