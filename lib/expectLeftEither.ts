import * as Either from 'fp-ts/Either';

export const expectLeftEither =
  <A, E>(leftHandler: (error: E) => void) =>
  (ma: Either.Either<E, A>): void =>
    Either.match(leftHandler, () => {
      throw new Error('It should not succeed');
    })(ma);
