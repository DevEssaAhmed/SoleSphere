import React, { useState, useContext } from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupPage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const {setCurrentUser} = useContext(UserContext) //! No need

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // ! The below function extracts value from the name then set it to the current value of the event. For example name is displayName and value is Essa so it will update the name value in formFields to Essa and since we are using vales from formfields in input so it will update the,
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='h-full bg-gray-50 pt-10'>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
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
                    name='displayName'
                    type='text'
                    onChange={handleChange}
                    value={displayName}
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
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={password}
                    onChange={handleChange}
                    autoComplete='current-password'
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
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-primary  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#47B5FF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Register
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
                className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
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
