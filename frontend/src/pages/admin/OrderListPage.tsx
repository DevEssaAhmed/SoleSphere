import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useGetOrdersQuery } from '../../store/apis/ordersApiSlice';
import Loader from '../../components/Loader/Loader';

const OrderListPage = () => {
  const { data, isLoading } = useGetOrdersQuery({});

  return (
    <div className='m-8 md:m-16  md:px-32 items-center justify-center'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-xl font-semibold text-gray-900'>Orders</h1>
            <p className='mt-2 text-sm text-gray-700'>
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
            >
              Add user
            </button>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                <table className='min-w-full divide-y table-auto divide-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                      >
                        ID
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                      >
                        USER
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        DATE
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        TOTAL
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        PAID
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        DELIVERED
                      </th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td className=''></td>
                        <td className=''></td>
                        <td className='flex items-center justify-center'>
                          <Loader />
                        </td>
                        <td className=''></td>
                        <td className=''></td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {data.map((order) => (
                        <tr key={order._id}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {order._id}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {order.user && order.user.name}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {order.createdAt.substring(0, 10)}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {order.totalPrice}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {order.isPaid ? (
                              order.paidAt.substring(0, 10)
                            ) : (
                              <FaTimes className='text-red-600' />
                            )}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {order.isDelivered ? (
                              order.deliveredAt.substring(0, 10)
                            ) : (
                              <FaTimes className='text-red-600' />
                            )}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:text-gray-800'>
                            <button>
                              <Link to={`/order/${order._id}`}>Details</Link>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
