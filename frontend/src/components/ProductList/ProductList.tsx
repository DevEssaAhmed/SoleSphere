import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../store/apis/productsApiSlice';
import Loader from '../Loader/Loader';
import Paginate from '../Paginate/Paginate';

const ProductList = ({ sliceCount }) => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({
    pageNumber,
    keyword,
  });

  if (isLoading) {
    return (
      <div className='w-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error: Network Error{isError}</div>;
  }

  if (data.products.length === 0) {
    return (
      <div className='max-w-5xl py-6 px-4 rounded-lg mx-auto bg-red-50 text-red-600 '>
        No results found for '{keyword}'
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-wrap justify-center items-center'>
        {data.products.slice(0, sliceCount).map((item) => {
          return (
            <div className='m-16' key={item._id}>
              <Link to={`/products/${item._id}`}>
                <ProductCard item={item} />
              </Link>
            </div>
          );
        })}
      </div>
      <div className='flex items-center justify-center'>
        <Paginate
          pages={data.pages}
          page={data.page}
          keyword={keyword ? keyword : ''}
        />
      </div>
    </>
  );
};

export default ProductList;
