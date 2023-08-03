export const getMeaningWord = async (word: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${word}`);

  if (!response.ok) return null;

  const data = await response.json();
  return data;
};
