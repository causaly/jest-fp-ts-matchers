import * as Either from 'fp-ts/Either';

import { expectRightEither } from './expectRightEither';

describe('expectRightEither', () => {
  test('should call right handler if `Either.right`', () => {
    const rightHandler = jest.fn();
    const monad = Either.right(1);

    expectRightEither(rightHandler)(monad);
    expect(rightHandler).toBeCalledWith(1);
  });

  test('should throw if `Either.left`', () => {
    const handler = jest.fn();
    const monad = Either.left(new Error('error'));

    const invoke = () => expectRightEither(handler)(monad);

    expect(invoke).toThrow(new Error('error'));
    expect(handler).not.toHaveBeenCalled();
  });
});
