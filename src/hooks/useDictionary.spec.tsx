import { ReactElement } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorSection from '@/components/page/Home/ErrorSection';

import { useDictionary } from './useDictionary';

describe('useDictionary hook', () => {
  it('should return the correct initial values', () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <ErrorBoundary fallback={<ErrorSection />}>{children}</ErrorBoundary>
    );

    const { result } = renderHook(() => useDictionary(), { wrapper });

    expect(result.current.meaning).toBe(undefined);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.handleSearch).toBeInstanceOf(Function);
  });
});
