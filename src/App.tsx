import { Title, TextInput, Button, Text } from '@mantine/core';

import { useDictionary } from './hooks/useDictionary';
import { container, resultContainer } from './styles/App.css';

const App = () => {
  const { meaning, setWord, word, handleSearch, status } = useDictionary();

  return (
    <div className={container}>
      <Title order={1}>Open Dictionary</Title>
      <Text>* Only word in English</Text>
      <TextInput
        placeholder="Search"
        variant="filled"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button
        loading={status.isLoading}
        onClick={handleSearch}
        variant="gradient"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        disabled={!word || status.isLoading}
      >
        Search
      </Button>

      <span className={resultContainer}>
        {meaning ?? <Text>{meaning}</Text>}
        {status.error ?? <Text>{status.error}</Text>}
      </span>
    </div>
  );
};

export default App;
