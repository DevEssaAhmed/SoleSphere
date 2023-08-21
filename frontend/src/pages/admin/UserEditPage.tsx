import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '../../store/apis/userApiSlice';

import Loader from '../../components/Loader/Loader';

const UserEditPage = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const handleSubmit = async () => {
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success('User Updated Successfully');
      refetch();
      navigate('/admin/users');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading user details</div>;
  }

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Edit User</h2>
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
          <label htmlFor='email' className='block font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border rounded-md p-2'
          />
        </div>
        <div className='flex space-x-4'>
          <input
            type='checkbox'
            id='isAdmin'
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
            className='border rounded-md p-16'
          />
          <label htmlFor='name' className='block font-medium mb-1'>
            Is Admin
          </label>
        </div>

        <div className='flex space-x-4'>
          <button
            onClick={handleSubmit}
            className='px-4 py-2 bg-primary hover:brightness-110 text-white rounded-md disabled:bg-gray-300'
            disabled={loadingUpdate}
          >
            {loadingUpdate ? 'Updating...' : 'Update User'}
          </button>
          <Link
            to='/admin/users'
            className='px-4 py-2 border rounded-md text-primary border-primary hover:bg-blue-100'
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserEditPage;
