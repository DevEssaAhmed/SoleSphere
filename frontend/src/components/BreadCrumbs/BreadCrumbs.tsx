import { Link } from 'react-router-dom';

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='flex items-center gap-x-2 text-sm text-gray-500'>
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {index < crumbs.length - 1 ? (
              <Link to={crumb.path}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && <span> /</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
