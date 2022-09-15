import * as IOEither from 'fp-ts/IOEither';
import { pipe } from 'fp-ts/lib/function';

export const expectLeftIOEither =
  <A, E>(leftHandler: (error: E) => void) =>
  (ma: IOEither.IOEither<E, A>): void =>
    pipe(
      ma,
      IOEither.match(leftHandler, () => {
        throw new Error('It should not succeed');
      })
    )();
