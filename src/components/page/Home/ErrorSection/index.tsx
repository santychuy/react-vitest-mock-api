import { Text, Button } from '@mantine/core';
import { useErrorBoundary } from 'react-error-boundary';

import { container } from './styles.css';

const ErrorSection = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className={container}>
      <Text size="lg" weight={500} align="center">
        Something went wrong
      </Text>
      <Button onClick={resetBoundary} variant="gradient">
        Try again
      </Button>
    </div>
  );
};

export default ErrorSection;
