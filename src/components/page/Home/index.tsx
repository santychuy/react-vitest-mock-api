import { Title, Text } from '@mantine/core';

import FormDictionary from './FormDictionary';
import { container } from './styles.css';

const Home = () => (
  <div className={container}>
    <Title order={1}>Open Dictionary</Title>
    <Text>* Only word in English</Text>

    <FormDictionary />
  </div>
);

export default Home;
