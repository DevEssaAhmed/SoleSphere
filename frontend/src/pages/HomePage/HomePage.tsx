import ProductList from '../../components/ProductList/ProductList';
import Header from './Header';

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className=''>
        <h1 className='text-center text-5xl font-bold mt-16 lg:mt-32 p-4'>
          Our Collection
        </h1>

        <ProductList sliceCount={8} />
      </div>
    </div>
  );
};

export default HomePage;
