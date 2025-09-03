import Menu from '../components/common/Menu';
import Interval from '../components/common/Interval';
import Categories from '../components/common/Categories';
import Sales from '../components/common/Sales';
import Products from '../components/common/Products';

export default function HomePage() {
  return (
    // Этот div будет контейнером для всего контента на главной странице
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl">
        <Menu />
        <Interval />
        <Categories />
        <Sales />
        <Products />
      </div>
    </div>
  );
}
