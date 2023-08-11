import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import nikeLogo from '../../assets/nikelogo.svg';
import adidasLogo from '../../assets/adidas.svg';
import filaLogo from '../../assets/fila.svg';
import pumaLogo from '../../assets/puma.svg';
import airLogo from '../../assets/airjordan.svg';

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    className: 'outline-none',
    draggable: 'false',
    swipe: 'false',
    responsive: [
      {
        breakpoint: 768, // change the breakpoint value as per your requirement
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='outline-none focus:outline-none'>
      <div className='p-16 '>
        <h2 className='text-center font-bold text-4xl'>Featured Brands</h2>

        <Slider {...settings}>
          <img className='brand-logo' src={nikeLogo} alt='Nike' />

          <img className='brand-logo' src={filaLogo} alt='Fila' />

          <img className='brand-logo' src={adidasLogo} alt='Adidas' />

          <img className='brand-logo' src={pumaLogo} alt='Nike' />

          <img className='brand-logo' src={airLogo} alt='Fila' />
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
