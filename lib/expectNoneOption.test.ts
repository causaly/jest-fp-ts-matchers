import * as Option from 'fp-ts/Option';

import { expectNoneOption } from './expectNoneOption';

describe('expectNoneOption', () => {
  test('should call the handler if `Option.none`', () => {
    const handler = jest.fn();
    const monad = Option.none;
    expectNoneOption(handler)(monad);
    expect(handler).toHaveBeenCalled();
  });

  test('should throw if `Option.some`', () => {
    const handler = jest.fn();
    const monad = Option.some(1);

    const invoke = () => expectNoneOption(handler)(monad);

    expect(invoke).toThrow(new Error('It should not have value'));
    expect(handler).not.toHaveBeenCalled();
  });
});
