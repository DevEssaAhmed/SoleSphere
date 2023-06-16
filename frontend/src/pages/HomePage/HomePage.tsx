import ProductList from '../../components/ProductList/ProductList';
import Header from './Header';
import { Product } from '../../types/Product';

const HomePage = () => {
  type State = {
    products: Product[];
    loading: boolean;
    error: string;
  };

  // type Action =
  //   | { type: 'FETCH_REQUEST' }
  //   | { type: 'FETCH_SUCCESS'; payload: Product[] }
  //   | { type: 'FETCH_FAIL'; payload: string };

  // const initialState: State = {
  //   products: [],
  //   loading: true,
  //   error: '',
  // };

  return (
    <div>
      <Header />

      <div className=''>
        <h1 className='text-center text-5xl font-bold mt-32 p-4'>
          Our Collection
        </h1>

        <ProductList sliceCount={8} />
      </div>
    </div>
  );
};

export default HomePage;
