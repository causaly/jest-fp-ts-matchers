import * as IOEither from 'fp-ts/IOEither';

import { expectRightIOEither } from './expectRightIOEither';

describe('expectRightIOEither', () => {
  test('should call right handler if `IOEither.right`', () => {
    const rightHandler = jest.fn();
    const monad = IOEither.right(1);

    expectRightIOEither(rightHandler)(monad);
    expect(rightHandler).toBeCalledWith(1);
  });

  test('should throw if `IOEither.left`', () => {
    const handler = jest.fn();
    const monad = IOEither.left(new Error('error'));

    const invoke = () => expectRightIOEither(handler)(monad);

    expect(invoke).toThrow(new Error('error'));
    expect(handler).not.toHaveBeenCalled();
  });
});
