import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import ProfileDropDown from '../DropDowns/ProfileDropDown';
import CartDropDown from '../CartDropdown/CartDropDown';
import { useAppSelector } from '../../store/hooks';
import AdminDropdown from '../DropDowns/AdminDropdown';

const navItemLinks = [
  { name: 'Home', type: 'link', href: '/' },
  { name: 'Products', type: 'link', href: 'products' },
  // { name: 'Categories', type: 'link' },
];

const NavItem = ({ name, href }) => {
  return (
    <>
      <li className='ml-5 bg-white    lg:hover:overline lg:hover:text-[#9869ff] border-none border-b border-black'>
        <Link to={`${href}`}>{name}</Link>
      </li>
    </>
  );
};

const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const cartRef = useRef(null);
  const profileRef = useRef(null);
  const adminRef = useRef(null);

  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if click was inside cart or profile
      if (
        (cartRef.current && cartRef.current.contains(event.target)) ||
        (profileRef.current && profileRef.current.contains(event.target)) ||
        (adminRef.current && adminRef.current.contains(event.target))
      ) {
        // Click was inside, so do not close anything
        return;
      }

      // Click was outside, so close both profile and cart
      setIsProfileOpen(false);

      setIsCartOpen(false);
      setIsAdminOpen(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isProfileOpen, isCartOpen]);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsProfileOpen(false);
    setIsAdminOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsCartOpen(false);
    setIsAdminOpen(false);
  };
  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
    setIsCartOpen(false);
    setIsProfileOpen(false);
  };

  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <>
      <nav className='sticky top-0 right-0 left-0 bg-white z-50 w-full mx-auto backdrop-blur-md px-4  sm:px-20  h-20 flex flex-row justify-between items-center '>
        {/*WideScreen Navigation  */}

        <Link to='/'>
          <img className='w-52 hover:scale-105' src={logo} alt='logo' />
        </Link>

        <div className='lg:hidden flex items-center justify-center z-20'>
          {isMenuOpen ? (
            <FaXmark className='w-6 h-6' onClick={toggleIsMenuOpen} />
          ) : (
            <div className='flex space-x-4'>
              <Link
                to='/cart'
                ref={cartRef}
                className='hover:text-[#9869ff] relative'
              >
                {cartItems.length > 0 && (
                  <span className='flex items-center justify-center text-center text-sm absolute -top-5 -right-2 rounded-full  h-5 w-5 bg-primary text-white'>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
                <i className='fa-solid fa-cart-shopping'></i>
              </Link>

              <button className='relative inline-block text-left'>
                {userInfo ? (
                  <div className='relative inline-block text-left'>
                    <div
                      ref={profileRef}
                      onClick={toggleProfile}
                      className='flex items-center justify-center text-gray-800 hover:text-primary focus:outline-none'
                    >
                      <FaUserCircle className='w-5 h-5' />
                    </div>
                    {isProfileOpen && <ProfileDropDown />}
                  </div>
                ) : (
                  <Link
                    to='/login'
                    className='text-black hover:text-white rounded-full  border border-primary hover:bg-primary px-4 py-2'
                  >
                    Login
                  </Link>
                )}
              </button>
              <FaBarsStaggered className='w-6 h-6' onClick={toggleIsMenuOpen} />
            </div>
          )}
        </div>

        <div className='items-center hidden lg:block'>
          <ul className={`items-center ml-5   flex `}>
            {navItemLinks.map((item) => (
              <NavItem key={item.name} name={item.name} href={item.href} />
            ))}
            <li className='ml-5 relative'>
              <div>
                <button
                  onClick={toggleCart}
                  ref={cartRef}
                  className='hover:text-[#9869ff] relative'
                >
                  {cartItems.length > 0 && (
                    <span className='flex items-center justify-center text-center text-sm absolute -top-5 -right-2 rounded-full  h-5 w-5 bg-primary text-white'>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </span>
                  )}
                  <i className='fa-solid fa-cart-shopping'></i>
                </button>
                {isCartOpen && <CartDropDown />}
              </div>
            </li>
            <li className='ml-5'>
              {userInfo ? (
                <div className='relative inline-block text-left'>
                  <button
                    ref={profileRef}
                    onClick={toggleProfile}
                    className='flex items-center text-gray-800 hover:text-primary focus:outline-none'
                  >
                    <span className='mr-2'>{userInfo.name}</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      ></path>
                    </svg>
                  </button>
                  {isProfileOpen && <ProfileDropDown />}
                </div>
              ) : (
                <Link
                  to='/login'
                  className='text-black hover:text-white rounded-full  border border-primary hover:bg-primary px-4 py-2'
                >
                  Login
                </Link>
              )}
            </li>
            <li className='ml-5'>
              {userInfo && userInfo.isAdmin && (
                <div className='relative inline-block text-left'>
                  <button
                    className='flex items-center text-gray-800 hover:text-primary focus:outline-none'
                    onClick={toggleAdmin}
                    ref={adminRef}
                  >
                    <span className='mr-2'>Admin</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      ></path>
                    </svg>
                  </button>
                  {isAdminOpen && <AdminDropdown />}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Navigatino */}

        <div
          className={`${
            isMenuOpen ? 'right-0 ' : 'right-full'
          } h-screen z-20 overflow-hidden  transition-all duration-500 mt-[60px] lg:mt-0 bg-white  flex flex-col w-full   fixed top-0 bottom-0 gap-x-9 lg:hidden items-start justify-start`}
        >
          <ul className='mt-8 text-black gap-y-6 flex flex-col overflow-hidden  items-start   font-semibold'>
            {navItemLinks.map((item) => (
              <NavItem key={item.name} name={item.name} href={item.href} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
