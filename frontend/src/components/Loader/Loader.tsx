const Loader = () => {
  return (
    <div
      className='animate-spin block w-8 h-8 border-[5px] border-current border-t-transparent text-sm text-gray-400 rounded-full'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loader;
