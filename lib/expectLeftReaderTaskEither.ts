import type { ReaderTask } from 'fp-ts/ReaderTask';
import * as ReaderTaskEither from 'fp-ts/ReaderTaskEither';

export const expectLeftReaderTaskEither =
  <R, E, A>(leftHandler: (error: E) => void) =>
  (ma: ReaderTaskEither.ReaderTaskEither<R, E, A>): ReaderTask<R, void> =>
    ReaderTaskEither.match(leftHandler, () => {
      throw new Error('It should not succeed');
    })(ma);
