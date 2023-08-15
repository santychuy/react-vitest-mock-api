import { Suspense } from 'react';
import { Title, Text, Loader } from '@mantine/core';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorSection from './ErrorSection';
import FormDictionary from './FormDictionary';
import { container } from './styles.css';

const Home = () => (
  <div className={container}>
    <Title order={1}>Open Dictionary</Title>
    <Text>* Only word in English</Text>

    <ErrorBoundary fallback={<ErrorSection />}>
      <Suspense fallback={<Loader />}>
        <FormDictionary />
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default Home;
