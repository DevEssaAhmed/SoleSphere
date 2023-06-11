import React from 'react';
import {Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';
import shoeImg from '../../assets/nike.png';

const ErrorPage = () => {
  // const err = useRouteError();
  return (
    <div className='p-16  bg-[#121212]  text-white error-page flex h-screen items-center  justify-evenly'>
      <img className='w-[700px]' src={shoeImg} alt='' />
      <div className='flex flex-col space-y-8 items-center justify-center'>
        <h1 className='text-4xl'>OOPS! Error Not Found</h1>
        <Link to="/">
        <button className='error-btn p-4 bg-primary rounded-lg'>
          Go back to Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
