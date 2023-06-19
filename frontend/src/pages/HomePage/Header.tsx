import HeaderImg from '../../assets/nike.png';

const Header = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row pt-16 sm:p-32 justify-center items-center container mx-auto'>
        <div className='section text-center sm:text-left mt-8 md:mt-0 md:w-1/2'>
          <h1 className='text-4xl  md:text-8xl leading-[1.2] mb-4 md:mb-8 font-bold'>
            Find <span>your</span> <br />
            dream <span className='text-primary'>Sneakers</span>
          </h1>
          <p className='text-base md:text-xl'>
            Elevate your style with our shoes - your one-stop-shop for trendy
            and comfortable shows online! Shop now for fast shipping and
            hassle-free returns.
          </p>

          <button className='mt-8 md:mt-12 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-primary text-white'>
            SHOP NOW
          </button>
        </div>
        <div className='section hidden sm:block -mt-24 md:mt-0 shoe-bg bg-opacity-10 md:w-1/2 md:ml-8'>
          <img className='' src={HeaderImg} alt='' />
        </div>
      </div>

      <div className='flex flex-wrap sm:flex-row   justify-evenly mx-auto p-8 m-4 text-center container'>
        <div className='flex items-center  '>
          <div className='w-12 h-12  md:w-16 md:h-16 flex items-center justify-center bg-primary rounded-md m-2 md:m-4'>
            <i className='fa-solid fa-shield text-white fa-lg md:fa-2xl'></i>
          </div>
          <h3 className='text-sm md:text-lg'>Secure Payment</h3>
        </div>
        <div className='flex items-center '>
          <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-primary rounded-md m-2 md:m-4'>
            <i className='fa-solid fa-solid fa-clock-rotate-left text-white fa-lg md:fa-2xl'></i>
          </div>
          <h3 className='text-sm md:text-lg'>24/7 support</h3>
        </div>
        <div className='flex items-center '>
          <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-primary rounded-md m-2 md:m-4'>
            <i className='fa-solid fa-truck text-white fa-lg md:fa-2xl'></i>
          </div>
          <h3 className='text-sm md:text-lg'>Fast Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
