import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProfileMutation } from '../../store/apis/userApiSlice';
import { setCredentials } from '../../store/slices/authSlice';
import { FaTimes } from 'react-icons/fa';

import Loader from '../../components/Loader/Loader';
import { useGetMyOrdersQuery } from '../../store/apis/ordersApiSlice';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const { data, isLoading } = useGetMyOrdersQuery({});

  console.log(data);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo, userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Profile Updated');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='flex flex-col md:flex-row bg-gray-50 px-16 md:p-32 '>
      <div className='md:w-1/4'>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='text-2xl font-semibold text-center'>User Profile</h2>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <div className='mt-1'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete='email'
                    required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    value={password}
                    autoComplete='current-password'
                    // required
                    placeholder='Enter Password'
                    title='Password requirements: Must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Confirm Password
                </label>
                <div className='mt-1'>
                  <input
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    autoComplete='current-password'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    placeholder='Enter Confirm Password'
                    // required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-primary  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#47B5FF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Upadte {loadingUpdateProfile && <Loader />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='md:w-3/4'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>Users</h1>
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
    </div>
  );
};

export default UserProfile;
