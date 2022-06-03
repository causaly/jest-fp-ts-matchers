import * as Either from 'fp-ts/Either';

export const expectRightEither =
  <A, E>(rightHandler: (value: A) => void) =>
  (ma: Either.Either<E, A>): void =>
    Either.match((error) => {
      throw error;
    }, rightHandler)(ma);
