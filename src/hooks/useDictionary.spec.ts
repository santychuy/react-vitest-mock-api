import { renderHook, act } from '@testing-library/react-hooks';

import { useDictionary } from './useDictionary';

describe('useDictionary hook', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(() => useDictionary());

    expect(result.current.word).toBe('');
    expect(result.current.meaning).toBe('');
    expect(result.current.status.error).toBeUndefined();
    expect(result.current.status.isLoading).toBeFalsy();
    expect(result.current.handleSearch).toBeInstanceOf(Function);
    expect(result.current.setWord).toBeInstanceOf(Function);
  });

  it('should set the word', () => {
    const { result } = renderHook(() => useDictionary());

    act(() => {
      result.current.setWord('dog');
    });

    expect(result.current.word).toBe('dog');
  });
});
