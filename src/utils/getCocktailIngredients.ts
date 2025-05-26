import { Cocktail } from '@/types';

export type CocktailIngredient = {
  ingredient: string;
  measure: string;
};

export function getCocktailIngredients(cocktail: Cocktail): CocktailIngredient[] {
  const ingredients: CocktailIngredient[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
    const measure = cocktail[`strMeasure${i}` as keyof Cocktail];

    if (ingredient) {
      ingredients.push({
        ingredient,
        measure: measure || '',
      });
    }
  }

  return ingredients;
}
