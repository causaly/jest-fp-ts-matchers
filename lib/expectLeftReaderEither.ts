import type { Reader } from 'fp-ts/Reader';
import * as ReaderEither from 'fp-ts/ReaderEither';

export const expectLeftReaderEither =
  <R, E, A>(leftHandler: (error: E) => void) =>
  (ma: ReaderEither.ReaderEither<R, E, A>): Reader<R, void> =>
    ReaderEither.match(leftHandler, () => {
      throw new Error('It should not succeed');
    })(ma);
