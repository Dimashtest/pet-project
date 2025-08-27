import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Interval from './components/common/Interval';
import Categories from './components/common/Categories';
import Sales from './components/common/Sales';
import Products from './components/common/Products';

export default function App() {
  return (
    <div>
      <Header /> 
      <div className='px-[10%]'>
        {/* Этот компонент будет виден на всех страницах */}
      <Menu />
      <Interval />
      <Categories />
      <Sales />
      <Products />
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Можно добавить маршрут для страницы "Не найдено" */}
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
      <Footer /> {/* И этот тоже */}
    </div>
  )
}