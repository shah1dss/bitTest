import { describe, it, expect } from 'vitest';
import { getCocktailIngredients } from './getCocktailIngredients';
import type { Cocktail } from '@/types';

describe('getCocktailIngredients', () => {
  it('returns an array of ingredients with measures', () => {
    const cocktail = {
      strIngredient1: 'Vodka',
      strMeasure1: '50ml',
      strIngredient2: 'Orange Juice',
      strMeasure2: '100ml',
      strIngredient3: null,
      strMeasure3: null,
    } as unknown as Cocktail;

    const result = getCocktailIngredients(cocktail);

    expect(result).toEqual([
      { ingredient: 'Vodka', measure: '50ml' },
      { ingredient: 'Orange Juice', measure: '100ml' },
    ]);
  });

  it('handles missing measure', () => {
    const cocktail = {
      strIngredient1: 'Gin',
      strMeasure1: null,
    } as unknown as Cocktail;

    const result = getCocktailIngredients(cocktail);

    expect(result).toEqual([{ ingredient: 'Gin', measure: '' }]);
  });

  it('returns an empty array if no ingredients are present', () => {
    const cocktail = {} as Cocktail;
    const result = getCocktailIngredients(cocktail);
    expect(result).toEqual([]);
  });
});
