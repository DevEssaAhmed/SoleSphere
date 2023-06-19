import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import CartDropDown from '../CartDropdown/CartDropDown';
import { FaBars } from 'react-icons/fa';

import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const cartRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIsProfileOpen = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className='fixed top-0 backdrop-blur-md flex items-center justify-between w-full h-20 px-16'>
      <div className='ml-8'>
        <Link to='/'>
          <img className='w-52 hover:scale-105' src={logo} alt='logo' />
        </Link>
      </div>
      <div className='flex items-center'>
        <ul
          className={`hidden md:flex items-center ml-5 ${
            isMenuOpen ? '' : 'hidden'
          }`}
        >
          <li className='ml-5 hover:overline hover:text-[#9869ff]'>
            <Link to='/'>Home</Link>
          </li>
          <li className='ml-5 hover:overline hover:text-[#9869ff]'>
            <Link to='/products'>Products </Link>
          </li>
          <li className='ml-5 hover:overline hover:text-[#9869ff]'>
            <Link to='/collection'>Collection</Link>
          </li>
          <li className='ml-5'>
            <button
              onClick={toggleIsCartOpen}
              ref={cartRef}
              className='hover:text-[#9869ff]'
            >
              <i className='fa-solid fa-cart-shopping'></i>
              {isCartOpen && <CartDropDown />}
            </button>
          </li>
          <li className='ml-5'>
            <div className='relative'>
              <div
                className='cursor-pointer'
                ref={profileRef}
                onClick={toggleIsProfileOpen}
              >
                {/* Profile Avatar */}
                {/* <img
                  src='dummy-avatar.png'
                  alt='Avatar'
                  className='w-8 h-8 rounded-full'
                /> */}
                <i className='fa-solid fa-user'></i>
              </div>
              {isProfileOpen && (
                // <div className='absolute right-0 mt-2 bg-white rounded shadow-md'>
                //   <ul className='py-2'>
                //     <li className='px-4 py-2 hover:bg-gray-100'>Settings</li>
                //     <li className='px-4 py-2 hover:bg-gray-100'>Sign Out</li>
                //   </ul>
                // </div>
                <ProfileDropDown />
              )}
            </div>
          </li>
        </ul>
        <div className='ml-5 md:hidden'>
          <FaBars className='text-2xl' onClick={toggleIsMenuOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
