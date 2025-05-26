import { Link } from 'react-router-dom';
import { COCKTAIL_NAMES } from '@/types';

export function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center'>
        <div className='text-6xl font-bold text-blue-600 mb-4'>404</div>
        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>Oops! Page Not Found</h1>
        <p className='text-gray-600 mb-6'>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className='mb-6'>
          <p className='text-gray-600 mb-2'>Try one of these popular cocktails:</p>
          <div className='flex flex-wrap justify-center gap-2'>
            {COCKTAIL_NAMES.slice(0, 4).map(cocktail => (
              <Link
                key={cocktail}
                to={`/${cocktail}`}
                className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors'
              >
                {cocktail}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to='/'
          className='inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
