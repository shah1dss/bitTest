import { Routes, Route, Navigate } from 'react-router-dom';
import { COCKTAIL_NAMES } from '@/types';
import { CocktailList } from '@/components/CocktailList';
import { NotFound } from './NotFound';

export default function FrontendRoutes() {
  return (
    <div className='p-2 md:p-4 lg:p-6 w-full'>
      <Routes>
        <Route path='/' element={<Navigate to={`/${COCKTAIL_NAMES[0]}`} replace />} />
        {COCKTAIL_NAMES.map(item => (
          <Route key={item} path={`/${item}`} element={<CocktailList name={item} />} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
