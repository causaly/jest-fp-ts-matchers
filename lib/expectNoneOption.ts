import * as Option from 'fp-ts/Option';

export const expectNoneOption =
  <A>(noneHandler: () => void) =>
  (ma: Option.Option<A>): void =>
    Option.match(noneHandler, () => {
      throw new Error('It should not have value');
    })(ma);
