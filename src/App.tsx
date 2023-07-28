import { Title, TextInput, Button, Text } from '@mantine/core';

import { useDictionary } from './hooks/useDictionary';
import './styles/App.css';

const App = () => {
  const { meaning, setWord, word, handleSearch, isLoading } = useDictionary();

  return (
    <div className="container">
      <Title order={1}>Open Dictionary</Title>
      <TextInput
        placeholder="Search"
        variant="filled"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button loading={isLoading} onClick={handleSearch} variant="gradient">
        Search
      </Button>
      {meaning && (
        <div className="result">
          <Text>{meaning}</Text>
        </div>
      )}
    </div>
  );
};

export default App;
