import HeaderImg from '../../assets/nike.png';

const Header = () => {
  return (
    <div>
      <div className='flex pt-48 justify-center item-center container mx-auto '>
        <div className='section mt-8 '>
          <h1 className='text-8xl  leading-[1.2] mb-8 font-bold'>
            Find <span>your</span> <br />
            dream <span className='text-[#9869ff]'>Sneakers</span>
          </h1>
          <p className='text-xl'>
            Elevate your style with our shoes - your one-stop-shop for trendy
            and comfortable shows online! Shop now for fast shipping and
            hassle-free returns.
          </p>

          <button className='mt-12 px-8 py-4 rounded-xl bg-[#9869ff] text-white'>
            SHOP NOW
          </button>
        </div>
        <div className='section -mt-24'>
          <img src={HeaderImg} alt='' />
        </div>
      </div>

      <div className='flex justify-evenly  mx-auto p-4 m-12 text-center container'>
        <div className='flex items-center '>
          <div className='w-16 h-16 flex items-center justify-center bg-[#986fff] rounded-md m-4'>
            <i className='fa-solid fa-shield text-white fa-2xl'></i>
          </div>
          <h3 className='text-lg'>Secure Payment</h3>
        </div>
        <div className='flex items-center '>
          <div className='w-16 h-16 flex items-center justify-center bg-[#986fff] rounded-md m-4'>
            <i className='fa-solid fa-solid fa-clock-rotate-left text-white fa-2xl'></i>
          </div>
          <h3 className='text-lg'>24/7 support</h3>
        </div>
        <div className='flex items-center '>
          <div className='w-16 h-16 flex items-center justify-center bg-[#986fff] rounded-md m-4'>
            <i className='fa-solid fa-truck text-white fa-2xl'></i>
          </div>
          <h3 className='text-lg'>Fast Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
