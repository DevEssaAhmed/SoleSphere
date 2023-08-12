import ProductList from '../../components/ProductList/ProductList';

const ProductPage = () => {
  return (
    <div className='p-4'>
      <ProductList sliceCount={1000} />
    </div>
  );
};

export default ProductPage;
