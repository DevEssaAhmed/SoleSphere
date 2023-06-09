import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import CartDropDown from '../CartDropdown/CartDropDown';

const Navbar = () => {
  // const [navColor, setColor] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  //! This is not needed anymore
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='fixed top-0   backdrop-blur-md  flex  items-center justify-between w-full h-20 px-16'>
      <div className='ml-8'>
        <Link to='/'>
          <img className='w-52 hover:scale-105' src={logo} alt='logo' />
        </Link>
      </div>
      <div>
        <ul className='flex items-center  ml-5  '>
          <li className='ml-5 hover:overline hover:text-[#9869ff]'>
            <Link to='/'>Home</Link>
          </li>
          <li className='ml-5 hover:overline hover:text-[#9869ff]'>
            <Link to='/shop'>Shop </Link>
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
            {/* {!currentUser ? (
              <Link to='/login'>
                {' '}
                <button
                  className='nav-button
              bg-[#47B5FF] text-white px-4 py-2 rounded-md  '
                  // onClick={() => setIsLoggedIn(false)}
                >
                  LogIn
                </button>
              </Link>
            ) : (
              <button
                className='nav-button  bg-[#47B5FF] text-white px-4 py-2 rounded-md '
                // onClick={() => setIsLoggedIn(true)}
              >
                LogOut
              </button>
            )} */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
