import '@testing-library/jest-dom';

// This setup supossing that all my test files are fetching data from the API
import { server } from './src/mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
