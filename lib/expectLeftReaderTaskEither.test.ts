import * as ReaderTaskEither from 'fp-ts/ReaderTaskEither';

import { expectLeftReaderTaskEither } from './expectLeftReaderTaskEither';

describe('expectLeftReaderTaskEither', () => {
  test('should call the handler if `ReaderTaskEither.left`', async () => {
    const handler = jest.fn();
    const monad = ReaderTaskEither.left(new Error('error'));

    await expectLeftReaderTaskEither(handler)(monad)(null)();

    expect(handler).toHaveBeenCalledWith(new Error('error'));
  });

  test('should throw if `ReaderTaskEither.right`', async () => {
    const handler = jest.fn();
    const monad = ReaderTaskEither.right(1);

    try {
      await expectLeftReaderTaskEither(handler)(monad)(null)();
    } catch (error) {
      expect(error).toEqual(new Error('It should not succeed'));
      expect(handler).not.toHaveBeenCalled();
    }
  });
});
