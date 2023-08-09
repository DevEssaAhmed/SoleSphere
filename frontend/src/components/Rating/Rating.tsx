import { FaStar, FaRegStar, FaStarHalf } from 'react-icons/fa6';

const Rating = ({ value, text }) => {
  return (
    <div className='text-primary rating flex items-center justify-center space-x-1'>
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-black'>{text ? text : ''}</span>
    </div>
  );
};

export default Rating;
