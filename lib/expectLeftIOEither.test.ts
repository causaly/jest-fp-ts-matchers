import * as IOEither from 'fp-ts/IOEither';
import { pipe } from 'fp-ts/lib/function';

import { expectLeftIOEither } from './expectLeftIOEither';

describe('expectLeftIOEither', () => {
  test('should call the handler if `IOEither.left`', () => {
    const handler = jest.fn();

    pipe(IOEither.left(new Error('error')), expectLeftIOEither(handler));

    expect(handler).toBeCalledWith(new Error('error'));
  });

  test('should throw if `IOEither.right`', () => {
    const handler = jest.fn();
    const monad = IOEither.right(1);

    const invoke = () => expectLeftIOEither(handler)(monad);

    expect(invoke).toThrow(new Error('It should not succeed'));
    expect(handler).not.toHaveBeenCalled();
  });
});
