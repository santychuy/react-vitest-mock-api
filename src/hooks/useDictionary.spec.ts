import { renderHook } from '@testing-library/react-hooks';

import { useDictionary } from './useDictionary';

describe('useDictionary hook', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(() => useDictionary());

    expect(result.current.meaning).toBe(undefined);
    expect(result.current.status.error).toBeUndefined();
    expect(result.current.status.isLoading).toBeFalsy();
    expect(result.current.handleSearch).toBeInstanceOf(Function);
  });
});
