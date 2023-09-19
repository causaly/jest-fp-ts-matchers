import * as ReaderEither from 'fp-ts/ReaderEither';

import { expectLeftReaderEither } from './expectLeftReaderEither';

describe('expectLeftReaderEither', () => {
  test('should call the handler if `ReaderEither.left`', () => {
    const handler = jest.fn();
    const monad = ReaderEither.left(new Error('error'));

    expectLeftReaderEither(handler)(monad)(null);

    expect(handler).toHaveBeenCalledWith(new Error('error'));
  });

  test('should throw if `ReaderEither.right`', () => {
    const handler = jest.fn();
    const monad = ReaderEither.right(1);

    try {
      expectLeftReaderEither(handler)(monad)(null);
    } catch (error) {
      expect(error).toEqual(new Error('It should not succeed'));
      expect(handler).not.toHaveBeenCalled();
    }
  });
});
