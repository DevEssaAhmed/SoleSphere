import { Link } from 'react-router-dom';

const AdminDropdown = () => {
  return (
    <div className='absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg'>
      <ul className='py-2'>
        <li>
          <Link
            to='/admin/products'
            className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to='/admin/users'
            className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            to='/admin/orderlist'
            className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
          >
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDropdown;
