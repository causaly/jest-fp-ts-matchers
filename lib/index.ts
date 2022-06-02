import * as Either from 'fp-ts/Either';
import * as Option from 'fp-ts/Option';
import type { Task } from 'fp-ts/Task';
import * as TaskEither from 'fp-ts/TaskEither';

export const expectLeftEither =
  <A, E>(leftHandler: (error: E) => void) =>
  (ma: Either.Either<E, A>): void =>
    Either.match(leftHandler, () => {
      throw new Error('It should not succeed');
    })(ma);

export const expectRightEither =
  <A, E>(rightHandler: (value: A) => void) =>
  (ma: Either.Either<E, A>): void =>
    Either.match((error) => {
      throw error;
    }, rightHandler)(ma);

export const expectLeftTaskEither =
  <A, E>(leftHandler: (error: E) => void) =>
  (ma: TaskEither.TaskEither<E, A>): Task<void> =>
    TaskEither.match(leftHandler, () => {
      throw new Error('It should not succeed');
    })(ma);

export const expectRightTaskEither =
  <A, E>(rightHandler: (value: A) => void) =>
  (ma: TaskEither.TaskEither<E, A>): Task<void> =>
    TaskEither.match((error) => {
      throw error;
    }, rightHandler)(ma);

export const expectSomeOption =
  <A>(someHandler: (value: A) => void) =>
  (ma: Option.Option<A>): void =>
    Option.match(() => {
      throw new Error('It should not be empty');
    }, someHandler)(ma);

export const expectNoneOption =
  <A>(noneHandler: () => void) =>
  (ma: Option.Option<A>): void =>
    Option.match(noneHandler, () => {
      throw new Error('It should not have value');
    })(ma);
