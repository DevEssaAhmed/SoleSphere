// import { Link } from 'react-router-dom';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// const ProfileDropDown = () => {
//   return (
//     <div className=' absolute  top-8 right-0 origin-top-right z-10 border p-4 w-36 '>
//       <ul className=''>
//         <li className='mb-2 hover:bg-gray-50'>
//           <Link to='/profile'>Profile</Link>
//         </li>
//         <li className='mb-2 hover:bg-gray-50'>
//           <Link to='/signout'>Sign out</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ProfileDropDown;

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { useLogoutMutation } from '../../store/apis/userApiSlice';
import { logout } from '../../store/slices/authSlice';

const ProfileDropdown = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHander = async () => {
    try {
      await logoutApiCall({});
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg'>
      <ul className='py-2'>
        <li>
          <Link
            to='/profile'
            className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
          >
            Profile
          </Link>
        </li>
        <li>
          <a
            href='#'
            className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
            onClick={logoutHander}
          >
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
