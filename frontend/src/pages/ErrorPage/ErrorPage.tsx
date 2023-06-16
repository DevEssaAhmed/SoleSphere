import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  // const err = useRouteError();
  return (
    // <div className='p-16  bg-[#121212]  text-white error-page flex h-screen items-center  justify-evenly'>
    //   <img className='w-[700px]' src={shoeImg} alt='' />
    //   <div className='flex flex-col space-y-8 items-center justify-center'>
    //     <h1 className='text-4xl'>OOPS! Error Not Found</h1>
    //     <Link to="/">
    //     <button className='error-btn p-4 bg-primary rounded-lg'>
    //       Go back to Home
    //     </button>
    //     </Link>
    //   </div>
    // </div>
    <main className='flex h-screen justify-center items-center place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-4xl font-semibold text-primary'>404</p>
        <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
