import * as IOEither from 'fp-ts/IOEither';

export const expectRightIOEither =
  <A, E>(rightHandler: (value: A) => void) =>
  (ma: IOEither.IOEither<E, A>): void =>
    IOEither.match((error) => {
      throw error;
    }, rightHandler)(ma)();
