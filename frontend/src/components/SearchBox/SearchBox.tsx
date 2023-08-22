import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex items-center'>
      <input
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='border rounded-l-md py-2 px-3 focus:outline-none'
      />
      <button
        type='submit'
        className=' text-white px-4 py-2 rounded-r-md transition duration-300 bg-primary hover:brightness-125'
      >
        <i className='fas fa-search'></i> {/* Font Awesome search icon */}
      </button>
    </form>
  );
};

export default SearchBox;
