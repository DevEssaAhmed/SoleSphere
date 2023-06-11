import { products, shopProducts } from '../../data';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
const ProductList = () => {
  return (
    <div className='flex flex-wrap p-8 m-16 gap-16'>
      {products.map((item) => {
        return (
          <div key={item.slug}>
            <div>
              <Link to={`product/${item.slug}`}>
                <ProductCard item={item} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
