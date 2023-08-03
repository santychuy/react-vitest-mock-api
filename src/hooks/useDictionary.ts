import { useState } from 'react';

import { getMeaningWord } from '../api/getMeaningWord';

export const useDictionary = () => {
  const [word, setWord] = useState<string>();
  const [meaning, setMeaning] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleSearch = async () => {
    try {
      if (!word) return;

      setError(undefined);
      setMeaning('');
      setIsLoading(true);

      const data = await getMeaningWord(word);

      setMeaning(data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      setError('Word not found');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    word,
    setWord,
    meaning,
    handleSearch,
    status: {
      error,
      isLoading,
    },
  };
};
