import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const ProfileDropDown = () => {
  return (
    <div className=' absolute  top-8 right-0 origin-top-right z-10 border p-4 w-36 '>
      <ul className=''>
        <li className='mb-2 hover:bg-gray-50'>
          <Link to='/profile'>Profile</Link>
        </li>
        <li className='mb-2 hover:bg-gray-50'>
          <Link to='/signout'>Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
