import * as Option from 'fp-ts/Option';

export const expectSomeOption =
  <A>(someHandler: (value: A) => void) =>
  (ma: Option.Option<A>): void =>
    Option.match(() => {
      throw new Error('It should not be empty');
    }, someHandler)(ma);
