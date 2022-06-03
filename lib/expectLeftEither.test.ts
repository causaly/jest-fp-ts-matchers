import * as Either from 'fp-ts/Either';

import { expectLeftEither } from './expectLeftEither';

describe('expectLeftEither', () => {
  test('should call the handler if `Either.left`', () => {
    const handler = jest.fn();
    const monad = Either.left(new Error('error'));

    expectLeftEither(handler)(monad);
    expect(handler).toBeCalledWith(new Error('error'));
  });

  test('should throw if `Either.right`', () => {
    const handler = jest.fn();
    const monad = Either.right(1);

    const invoke = () => expectLeftEither(handler)(monad);

    expect(invoke).toThrow(new Error('It should not succeed'));
    expect(handler).not.toHaveBeenCalled();
  });
});
