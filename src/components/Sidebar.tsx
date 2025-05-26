import { COCKTAIL_NAMES } from '@/types';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='bg-blue-600 text-white p-2 md:p-4 w-full md:w-48 md:min-h-screen'>
      <h2 className='text-lg md:text-xl font-bold mb-2 md:mb-4 border-b pb-2 text-center'>
        Cocktails
      </h2>
      <ul className='flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible'>
        {COCKTAIL_NAMES.map(item => {
          const isActive = currentPath === `/${item}`;
          return (
            <li key={item} className='flex-shrink-0'>
              <Link
                to={`/${item}`}
                className={`block px-3 py-1 md:px-4 md:py-2 rounded hover:bg-blue-700 capitalize transition-colors ${isActive ? 'bg-blue-500' : ''}`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
