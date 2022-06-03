import * as Option from 'fp-ts/Option';

import { expectSomeOption } from './expectSomeOption';

describe('expectSomeOption', () => {
  test('should call the handler if `Option.some`', () => {
    const handler = jest.fn();
    const monad = Option.some(1);

    expectSomeOption(handler)(monad);
    expect(handler).toBeCalledWith(1);
  });

  test('should throw if `Option.none`', () => {
    const handler = jest.fn();
    const monad = Option.none;

    const invoke = () => expectSomeOption(handler)(monad);

    expect(invoke).toThrow(new Error('It should not be empty'));
    expect(handler).not.toHaveBeenCalled();
  });
});
