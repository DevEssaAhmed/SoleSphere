const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    pages > 1 && (
      <nav className='block '>
        <ul className='flex items-center space-x-2'>
          {page > 1 && (
            <li>
              <a
                href={
                  !isAdmin
                    ? keyword
                      ? `/search/${keyword}/page/${prevPage}`
                      : `/page/${prevPage}`
                    : `/admin/products/${prevPage}`
                }
                className='px-3 py-2 rounded text-primary hover:bg-purple-200'
              >
                &lt;
              </a>
            </li>
          )}

          {[...Array(pages).keys()].map((x) => (
            <li key={x + 1}>
              <a
                href={
                  !isAdmin
                    ? keyword
                      ? `/search/${keyword}/page/${x + 1}`
                      : `/products/page/${x + 1}`
                    : `/admin/products/${x + 1}`
                }
                className={`px-3 py-2 rounded ${
                  x + 1 === page
                    ? 'bg-primary text-white'
                    : 'text-primary hover:bg-purple-200'
                }`}
              >
                {x + 1}
              </a>
            </li>
          ))}

          {page < pages && (
            <li>
              <a
                href={
                  !isAdmin
                    ? keyword
                      ? `/search/${keyword}/page/${nextPage}`
                      : `/products/page/${nextPage}`
                    : `/admin/products/${nextPage}`
                }
                className='px-3 py-2 rounded text-primary hover:bg-purple-200'
              >
                &gt;
              </a>
            </li>
          )}
        </ul>
      </nav>
    )
  );
};

export default Paginate;
