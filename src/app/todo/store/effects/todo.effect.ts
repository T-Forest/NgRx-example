import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '../../services/todo.service';
import * as TodoActions from '../actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAll),
      //マッピングオペレータおすすめ：switchMap
      switchMap(({ offset, limit }) =>
        this.todoService.loadAll(offset, limit).pipe(
          map(result => TodoActions.loadAllSuccess({ todos: result })),
          catchError(error => of(TodoActions.loadAllFailure({ error })))
        )
      )
    )
  );

  // createSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(TodoActions.loadAllSuccess),
  //       tap(action => {
  //         console.log('success!');
  //       })
  //     ),
  //     { dispatch: false } //新しいアクションを呼ばない
  // );

}
