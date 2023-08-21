import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaTimes, FaCheck } from 'react-icons/fa';
import Loader from '../../components/Loader/Loader';

import { toast } from 'react-toastify';
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '../../store/apis/userApiSlice';

const UserListPage = () => {
  const { data: users, refetch, isLoading } = useGetUsersQuery({});

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure')) {
      try {
        await deleteUser(id);
        refetch();
        toast.success('User deleted successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='m-8 md:m-16  md:px-32 items-center justify-center'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-xl font-semibold text-gray-900'>Users</h1>
            <p className='mt-2 text-sm text-gray-700'>
              A list of all the users
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            {/* <button
              type='button'
              onClick={createProductHandler}
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
            >
              {loadingCreate ? (
                <Loader />
              ) : (
                <>
                  <FaEdit className='text-white mx-2' /> Add Product
                </>
              )}
            </button> */}
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
                        NAME
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        EMAIL
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        ADMIN
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        EDIT USER
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        DELETE USER
                      </th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td className=''></td>
                        <td className=''></td>
                        <td className=''></td>
                        <td className='flex items-center justify-center'>
                          <Loader />
                        </td>
                        <td className=''></td>
                        <td className=''></td>
                        <td className=''></td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {user._id}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {user.name}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {user.isAdmin ? (
                              <FaCheck className='text-green-600' />
                            ) : (
                              <FaTimes className='text-red-600' />
                            )}
                          </td>

                          <td className='whitespace-nowrap  px-3 py-4 text-sm text-gray-500'>
                            <button>
                              <Link to={`/admin/user/${user._id}/edit`}>
                                <FaEdit className='text-blue-600' />
                              </Link>
                            </button>
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:text-gray-800'>
                            <button onClick={() => handleDelete(user._id)}>
                              <FaTrash className='text-red-600' />
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

export default UserListPage;
