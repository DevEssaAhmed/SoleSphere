import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useRegisterMutation } from '../../store/apis/userApiSlice';
import { setCredentials } from '../../store/slices/authSlice';

import Logo from '../../assets/logo.svg';
import Loader from '../../components/Loader/Loader';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;
  const [passwordError, setPasswordError] = useState('');
  // const {setCurrentUser} = useContext(UserContext) //! No need
  const isRequirementMet = (regex) => {
    return regex.test(password);
  };
  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state: any) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        // const res = await register({ name, email, password }).unwrap();
        console.log(formFields);
        const res = await register({ ...formFields }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // ! The below function extracts value from the name then set it to the current value of the event. For example name is displayName and value is Essa so it will update the name value in formFields to Essa and since we are using vales from formfields in input so it will update the,

    // Check password validity
    if (password.length === 0) {
      setPasswordError('Password is required.');
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        password
      )
    ) {
      setPasswordError(
        'Password requirements not met. Please follow the specified conditions.'
      );
    } else {
      setPasswordError('');
    }
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='h-full bg-gray-50 pt-10'>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-12 w-auto' src={Logo} alt='Fittire' />
          <h2 className='mt-6 text-center text-2xl font-bold tracking-tight text-gray-900'>
            Sign up with your Email and Password
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' onSubmit={handleSubmit} method='POST'>
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
                    onChange={handleChange}
                    value={name}
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
                    onChange={handleChange}
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
                    type='password'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    value={password}
                    onChange={handleChange}
                    autoComplete='current-password'
                    required
                    title='Password requirements: Must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                  {passwordError && (
                    <div className='text-red-500 mt-1 text-sm'>
                      {passwordError}
                    </div>
                  )}
                  {password && (
                    <div className='flex flex-col mt-1'>
                      <div className='flex items-center mr-4'>
                        {isRequirementMet(/(?=.*[a-z])/) ? (
                          <div className='rounded-full h-4 w-4 bg-green-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>✓</span>
                          </div>
                        ) : (
                          <div className='rounded-full h-4 w-4 bg-red-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>×</span>
                          </div>
                        )}
                        <span
                          className={
                            isRequirementMet(/(?=.*[a-z])/)
                              ? 'text-green-500'
                              : 'text-red-500'
                          }
                        >
                          At least one lowercase letter
                        </span>
                      </div>
                      <div className='flex items-center mr-4'>
                        {isRequirementMet(/(?=.*[A-Z])/) ? (
                          <div className='rounded-full h-4 w-4 bg-green-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>✓</span>
                          </div>
                        ) : (
                          <div className='rounded-full h-4 w-4 bg-red-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>×</span>
                          </div>
                        )}
                        <span
                          className={
                            isRequirementMet(/(?=.*[A-Z])/)
                              ? 'text-green-500'
                              : 'text-red-500'
                          }
                        >
                          At least one uppercase letter
                        </span>
                      </div>
                      <div className='flex items-center mr-4'>
                        {isRequirementMet(/(?=.*\d)/) ? (
                          <div className='rounded-full h-4 w-4 bg-green-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>✓</span>
                          </div>
                        ) : (
                          <div className='rounded-full h-4 w-4 bg-red-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>×</span>
                          </div>
                        )}
                        <span
                          className={
                            isRequirementMet(/(?=.*\d)/)
                              ? 'text-green-500'
                              : 'text-red-500'
                          }
                        >
                          At least one digit
                        </span>
                      </div>
                      <div className='flex items-center'>
                        {isRequirementMet(/(?=.*[@$!%*?&])/) ? (
                          <div className='rounded-full h-4 w-4 bg-green-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>✓</span>
                          </div>
                        ) : (
                          <div className='rounded-full h-4 w-4 bg-red-500 flex items-center justify-center mr-2'>
                            <span className='text-white'>×</span>
                          </div>
                        )}
                        <span
                          className={
                            isRequirementMet(/(?=.*[@$!%*?&])/)
                              ? 'text-green-500'
                              : 'text-red-500'
                          }
                        >
                          At least one special character
                        </span>
                      </div>
                    </div>
                  )}
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
                    value={confirmPassword}
                    onChange={handleChange}
                    autoComplete='current-password'
                    required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-primary  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#47B5FF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  disabled={isLoading}
                >
                  Register
                  {isLoading && <Loader />}
                </button>
              </div>
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='bg-white px-2 text-gray-500'>
                    Already Registered
                  </span>
                </div>
              </div>

              <Link
                to='/login'
                className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium 
                text-gray-700 shadow-sm hover:bg-gray-50'
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
