import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  useUpdateProductMutation,
  useGetProductsDetailsQuery,
} from '../../store/apis/productsApiSlice';

import Loader from '../../components/Loader/Loader';

const ProductEditPage = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const [sizesValue, setSizesValue] = useState('');
  const [sizeArray, setSizeArray] = useState([]);
  const [colorsValue, setColorsValue] = useState('');
  const [colorsArray, setColorsArray] = useState([]);

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductsDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
      setSizeArray(product.sizes);
      setColorsArray(product.colors);
    }
  }, [product]);

  const handleSizeChange = (event) => {
    const sizesValue = event.target.value;
    setSizesValue(sizesValue);

    const sizes = sizesValue
      .split(',')
      .map((size) => parseInt(size.trim(), 10));
    setSizeArray(sizes);
  };
  const handleColorChange = (event) => {
    const colorsValue = event.target.value;
    setColorsValue(colorsValue);

    const colors = colorsValue.split(',').map((color) => color.trim());
    setColorsArray(colors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      _id: productId,
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      description,
      sizes: sizeArray,
      colors: colorsArray,
    };
    const result = await updateProduct(updatedProduct).unwrap();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Product updated successfully');
      navigate('/admin/products'); // Redirect to products list page
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Edit Product</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block font-medium mb-1'>
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label htmlFor='price' className='block font-medium mb-1'>
            Price
          </label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(e:any) => setPrice(e.target.value)}
            className='w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label htmlFor='brand' className='block font-medium mb-1'>
            Brand
          </label>
          <input
            type='brand'
            id='brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className='w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label htmlFor='countInStock' className='block font-medium mb-1'>
            Count In Stock
          </label>
          <input
            type='number'
            id='countInStock'
            value={countInStock}
            onChange={(e: any) => setCountInStock(e.target.value)}
            className='w-full border rounded-md p-2'
          />
        </div>

        <div>
          <label htmlFor='description' className='block font-medium mb-1'>
            Description
          </label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label htmlFor='sizes' className='block font-medium mb-1'>
            Sizes
          </label>
          <input
            type='text'
            id='sizes'
            value={sizesValue}
            onChange={handleSizeChange}
            className='w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label htmlFor='colors' className='block font-medium mb-1'>
            Colors
          </label>
          <input
            type='text'
            id='colors'
            value={colorsValue}
            onChange={handleColorChange}
            className='w-full border rounded-md p-2'
          />
        </div>

        {/* Add input fields for other product details */}
        {/* ... */}
        <div className='flex space-x-4'>
          <button
            type='submit'
            className='px-4 py-2 bg-primary hover:brightness-110 text-white rounded-md disabled:bg-gray-300'
            disabled={loadingUpdate}
          >
            {loadingUpdate ? 'Updating...' : 'Update Product'}
          </button>
          <Link
            to='/products'
            className='px-4 py-2 border rounded-md text-primary border-primary hover:bg-blue-100'
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProductEditPage;
