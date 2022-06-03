import * as TaskEither from 'fp-ts/TaskEither';

import { expectRightTaskEither } from './expectRightTaskEither';

describe('expectRightTaskEither', () => {
  test('should call right handler if `TaskEither.right`', async () => {
    const handler = jest.fn();
    const monad = TaskEither.right(1);

    await expectRightTaskEither(handler)(monad)();
    expect(handler).toHaveBeenCalledWith(1);
  });

  test('should throw if `TaskEither.left`', async () => {
    const handler = jest.fn();
    const monad = TaskEither.left(new Error('error'));

    try {
      await expectRightTaskEither(handler)(monad)();
    } catch (error) {
      expect(error).toEqual(new Error('error'));
      expect(handler).not.toHaveBeenCalled();
    }
  });
});
