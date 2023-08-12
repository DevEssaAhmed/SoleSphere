import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';
import CartDropDown from '../CartDropdown/CartDropDown';
import { useAppSelector } from '../../store/hooks';

const navItemLinks = [
  { name: 'Home', type: 'link', href: '/' },
  { name: 'Products', type: 'link', href: 'products' },
  { name: 'Categories', type: 'link' },
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

  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <>
      <nav className='sticky top-0 right-0 left-0 bg-white z-50 container mx-auto backdrop-blur-md  px-5  h-20 flex flex-row justify-between items-center '>
        {/*WideScreen Navigation  */}

        <Link to='/'>
          <img className='w-52 hover:scale-105' src={logo} alt='logo' />
        </Link>

        <div className='lg:hidden z-20'>
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
                {/* {isCartOpen && <CartDropDown />} */}
              </Link>

              <button className='relative'>
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
            <li className='ml-5'>
              <button
                onClick={toggleIsCartOpen}
                ref={cartRef}
                className='hover:text-[#9869ff] relative'
              >
                {cartItems.length > 0 && (
                  <span className='flex items-center justify-center text-center text-sm absolute -top-5 -right-2 rounded-full  h-5 w-5 bg-primary text-white'>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
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
