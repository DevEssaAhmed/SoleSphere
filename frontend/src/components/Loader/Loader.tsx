const Loader = () => {
  return (
    <div
      className='animate-spin inline-block w-6 h-6 border-[5px] border-current border-t-transparent text-sm text-gray-400 rounded-full'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loader;
