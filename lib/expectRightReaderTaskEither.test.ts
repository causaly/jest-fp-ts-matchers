import * as ReaderTaskEither from 'fp-ts/ReaderTaskEither';

import { expectRightReaderTaskEither } from './expectRightReaderTaskEither';

describe('expectRightReaderTaskEither', () => {
  test('should call right handler if `ReaderTaskEither.right`', async () => {
    const handler = jest.fn();
    const monad = ReaderTaskEither.right(1);

    await expectRightReaderTaskEither(handler)(monad)(null)();
    expect(handler).toHaveBeenCalledWith(1);
  });

  test('should throw if `ReaderTaskEither.left`', async () => {
    const handler = jest.fn();
    const monad = ReaderTaskEither.left(new Error('error'));

    try {
      await expectRightReaderTaskEither(handler)(monad)(null)();
    } catch (error) {
      expect(error).toEqual(new Error('error'));
      expect(handler).not.toHaveBeenCalled();
    }
  });
});
