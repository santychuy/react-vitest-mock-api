import { useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { getMeaningWord } from '@/api/getMeaningWord';

export const useDictionary = () => {
  const [meaning, setMeaning] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showBoundary } = useErrorBoundary();

  const handleSearch = async (word: string) => {
    try {
      if (!word) return;

      setMeaning('');
      setIsLoading(true);

      const data = await getMeaningWord(word);

      setMeaning(data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      showBoundary(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    meaning,
    handleSearch,
    isLoading,
  };
};
