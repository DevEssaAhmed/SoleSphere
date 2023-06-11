import ProductList from '../../components/ProductList/ProductList';
import Header from './Header';
import { Product } from '../../types/Product';
const HomePage = () => {
  type State = {
    products: Product[];
    loading: boolean;
    error: string;
  };

  type Action =
    | { type: 'FETCH_REQUEST' }
    | { type: 'FETCH_SUCCESS'; payload: Product[] }
    | { type: 'FETCH_FAIL'; payload: string };

  const initialState: State = {
    products: [],
    loading: true,
    error: '',
  };

  return (
    <>
      {/* <div>
        <div>
          <h1>Find your dream seakers</h1>
          <h4>
            Find your shoes from our various collections, here shoes are endless
            for your endless choices
          </h4>
          <button>Explore more</button>
        </div>
        <div>
          <span></span>
          <img src={heroImg} alt='' />
        </div>
      </div>
      <div></div> */}
      <Header />
      <ProductList />
    </>
  );
};

export default HomePage;
