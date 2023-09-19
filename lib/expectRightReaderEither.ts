import type { Reader } from 'fp-ts/Reader';
import * as ReaderEither from 'fp-ts/ReaderEither';

export const expectRightReaderEither =
  <R, E, A>(rightHandler: (value: A) => void) =>
  (ma: ReaderEither.ReaderEither<R, E, A>): Reader<R, void> =>
    ReaderEither.match((error) => {
      throw error;
    }, rightHandler)(ma);
