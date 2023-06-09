import { products, shopProducts } from '../../data';
import { Link } from 'react-router-dom';
const ProductList = () => {
  return (
    <div className='flex flex-wrap p-8 m-16 gap-8'>
      {products.map((item) => {
        return (
          <div key={item.slug}>
            <div>
              <Link to={`product/${item.slug}`}>
                <img className='w-64' src={item.image} alt='' />
                <h1>{item.name}</h1>
                <h3> {item.price}</h3>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
