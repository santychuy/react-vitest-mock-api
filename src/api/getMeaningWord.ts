export const getMeaningWord = async (word: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );

  const data = await response.json();
  return data;
};
