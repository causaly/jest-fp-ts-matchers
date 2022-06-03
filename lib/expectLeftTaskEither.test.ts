import * as TaskEither from 'fp-ts/TaskEither';

import { expectLeftTaskEither } from './expectLeftTaskEither';

describe('expectLeftTaskEither', () => {
  test('should call the handler if `TaskEither.left`', async () => {
    const handler = jest.fn();
    const monad = TaskEither.left(new Error('error'));

    await expectLeftTaskEither(handler)(monad)();

    expect(handler).toHaveBeenCalledWith(new Error('error'));
  });

  test('should throw if `TaskEither.right`', async () => {
    const handler = jest.fn();
    const monad = TaskEither.right(1);

    try {
      await expectLeftTaskEither(handler)(monad)();
    } catch (error) {
      expect(error).toEqual(new Error('It should not succeed'));
      expect(handler).not.toHaveBeenCalled();
    }
  });
});
