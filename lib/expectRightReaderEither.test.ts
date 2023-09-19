import * as ReaderEither from 'fp-ts/ReaderEither';

import { expectRightReaderEither } from './expectRightReaderEither';

describe('expectRightReaderEither', () => {
  test('should call right handler if `ReaderEither.right`', async () => {
    const handler = jest.fn();
    const monad = ReaderEither.right(1);

    expectRightReaderEither(handler)(monad)(null);
    expect(handler).toHaveBeenCalledWith(1);
  });

  test('should throw if `ReaderEither.left`', async () => {
    const handler = jest.fn();
    const monad = ReaderEither.left(new Error('error'));

    try {
      expectRightReaderEither(handler)(monad)(null);
    } catch (error) {
      expect(error).toEqual(new Error('error'));
      expect(handler).not.toHaveBeenCalled();
    }
  });
});
