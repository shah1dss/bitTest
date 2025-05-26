import { useGetCocktailList } from '@/hooks/useGetCocktailList';
import type { Cocktail, CocktailName } from '@/types';
import { getCocktailIngredients } from '@/utils/getCocktailIngredients';

interface CocktailListProps {
  name: CocktailName;
}

export const CocktailList = ({ name }: CocktailListProps) => {
  const { data, error, isLoading } = useGetCocktailList(name);

  if (isLoading) return <div className='text-center p-4'>Loading...</div>;
  if (error) return <div className='text-red-500 p-4'>Error: {error.message}</div>;

  return (
    <div className='p-1 md:p-2 mx-auto flex flex-col gap-3 md:gap-5 max-w-7xl'>
      {data?.drinks?.map((drink: Cocktail) => {
        const ingredients = getCocktailIngredients(drink);
        return (
          <div key={drink.idDrink} className='bg-white rounded-lg shadow p-2 md:p-4 lg:p-6'>
            <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
              <div className='md:w-2/3'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2'>
                  {drink.strDrink}
                </h1>

                <div className='grid grid-cols-1  gap-2 md:gap-4 mb-2 md:mb-4'>
                  <div className='flex gap-2'>
                    <p className='text-sm md:text-base text-gray-600'>Category:</p>
                    <p className='text-sm md:text-base font-medium'>{drink.strCategory}</p>
                  </div>
                  <div className='flex gap-2'>
                    <p className='text-sm md:text-base text-gray-600'>Type:</p>
                    <p className='text-sm md:text-base font-medium'>{drink.strAlcoholic}</p>
                  </div>
                  <div className='flex gap-2'>
                    <p className='text-sm md:text-base text-gray-600'>Glass:</p>
                    <p className='text-sm md:text-base font-medium'>{drink.strGlass}</p>
                  </div>
                  {drink.strIBA && (
                    <div className='flex gap-2'>
                      <p className='text-sm md:text-base text-gray-600'>IBA Category:</p>
                      <p className='text-sm md:text-base font-medium'>{drink.strIBA}</p>
                    </div>
                  )}
                </div>

                <div className='mb-3 md:mb-6'>
                  <h2 className='text-lg md:text-xl font-semibold mb-1 md:mb-2'>Instructions:</h2>
                  <p className='text-sm md:text-base text-gray-700'>{drink.strInstructions}</p>
                </div>

                <div>
                  <h2 className='text-lg md:text-xl font-semibold mb-1 md:mb-2'>Ingredients:</h2>
                  <ul className='space-y-1 md:space-y-2'>
                    {ingredients.map((item, index) => (
                      <li key={index} className='flex items-baseline gap-2'>
                        <span className='text-sm md:text-base font-bold'>{item.ingredient}:</span>
                        <span className='text-sm md:text-base font-medium italic text-gray-400'>
                          {item.measure || 'not specified'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:w-1/3'>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className='w-full h-auto max-h-48 md:max-h-none object-cover rounded-lg'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
