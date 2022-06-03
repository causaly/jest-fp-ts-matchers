import type { Task } from 'fp-ts/Task';
import * as TaskEither from 'fp-ts/TaskEither';

export const expectRightTaskEither =
  <A, E>(rightHandler: (value: A) => void) =>
  (ma: TaskEither.TaskEither<E, A>): Task<void> =>
    TaskEither.match((error) => {
      throw error;
    }, rightHandler)(ma);
