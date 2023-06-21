import { products, shopProducts } from '../../data';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../store/store';

const ProductList = ({ sliceCount }) => {
  // Receive sliceCount as a prop
  const { data } = useGetProductsQuery();
  console.log(data);

  return (
    <div className='flex flex-wrap justify-center items-center'>
      {products.slice(0, sliceCount).map((item) => {
        // Use sliceCount prop here
        return (
          <div className='m-16' key={item.slug}>
            <Link to={`/products/${item.slug}`}>
              <ProductCard item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
