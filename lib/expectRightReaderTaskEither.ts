import type { ReaderTask } from 'fp-ts/ReaderTask';
import * as ReaderTaskEither from 'fp-ts/ReaderTaskEither';

export const expectRightReaderTaskEither =
  <R, E, A>(rightHandler: (value: A) => void) =>
  (ma: ReaderTaskEither.ReaderTaskEither<R, E, A>): ReaderTask<R, void> =>
    ReaderTaskEither.match((error) => {
      throw error;
    }, rightHandler)(ma);
