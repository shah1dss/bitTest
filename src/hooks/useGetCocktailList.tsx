import { useQuery } from '@tanstack/react-query';
import type { CocktailName, CocktailApiResponse } from '@/types';

const fetchCocktails = async (name: CocktailName): Promise<CocktailApiResponse> => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export const useGetCocktailList = (name: CocktailName) => {
  return useQuery<CocktailApiResponse, Error>({
    queryKey: ['cocktails', name],
    queryFn: () => fetchCocktails(name),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};
