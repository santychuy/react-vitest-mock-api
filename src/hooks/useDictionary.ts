import { useState } from 'react';

import { getMeaningWord } from '../api/getMeaningWord';

export const useDictionary = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    if (!word) {
      return setIsLoading(false);
    }

    const data = await getMeaningWord(word);
    setMeaning(data[0].meanings[0].definitions[0].definition);

    setIsLoading(false);
  };

  return { word, setWord, meaning, handleSearch, isLoading };
};
