import type { Task } from 'fp-ts/Task';
import * as TaskEither from 'fp-ts/TaskEither';

export const expectLeftTaskEither =
  <A, E>(leftHandler: (error: E) => void) =>
  (ma: TaskEither.TaskEither<E, A>): Task<void> =>
    TaskEither.match(leftHandler, () => {
      throw new Error('It should not succeed');
    })(ma);
