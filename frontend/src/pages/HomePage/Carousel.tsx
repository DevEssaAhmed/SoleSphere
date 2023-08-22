import { useState, useEffect } from 'react';

const images = [
  '/Carousel1.png',
  '/Carousel2.png',
  '/Carousel3.png',
  '/Carousel4.png',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='w-full  flex items-center justify-center'>
      <div className='w-4/5 sm:w-2/3 md:w-1/2 lg:w-3/4 aspect-auto md:h-[600px] rounded-lg overflow-hidden shadow-md'>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className='w-full h-auto'
        />
      </div>
    </div>
  );
};

export default Carousel;
