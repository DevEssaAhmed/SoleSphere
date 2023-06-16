import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import CartDropDown from '../CartDropdown/CartDropDown';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
            <Link
              to='/cart'
              onClick={toggleIsCartOpen}
              className='hover:text-[#9869ff]'
            >
              <i className='fa-solid fa-cart-shopping'></i>
              {isCartOpen && <CartDropDown />}
            </Link>
          </li>
          <li className='ml-5'>
            <div className='relative'>
              <div className='cursor-pointer' onClick={toggleIsProfileOpen}>
                {/* Profile Avatar */}
                <img
                  src='dummy-avatar.png'
                  alt='Avatar'
                  className='w-8 h-8 rounded-full'
                />
              </div>
              {isProfileOpen && (
                <div className='absolute right-0 mt-2 bg-white rounded shadow-md'>
                  <ul className='py-2'>
                    <li className='px-4 py-2 hover:bg-gray-100'>Settings</li>
                    <li className='px-4 py-2 hover:bg-gray-100'>Sign Out</li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
        <div className='ml-5 md:hidden'>
          <FaBars className='text-2xl' onClick={toggleIsMenuOpen} />
        </div>
      </div>
      {/* Cart display on small screen */}
      <div className={`md:hidden ml-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link
          to='/cart'
          onClick={toggleIsCartOpen}
          className='hover:text-[#9869ff]'
        >
          <i className='fa-solid fa-cart-shopping'></i>
          {isCartOpen && <CartDropDown />}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
