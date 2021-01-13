import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as TodoSelectors from './selectors';
import * as TodoActions from './actions';
import { TodoStoreModule } from './todo-store.module';
import { State } from './state';

//作成は任意。
//FacadeはNgRxの処理を抽象化する、中間層。
//コンポーネントがNgRxに強く依存することを防ぐ。
@Injectable({
  providedIn: TodoStoreModule,
})
export class TodoFacade {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todos$ = this.store.pipe(select(TodoSelectors.getTodos));

  constructor(private store: Store<State>) {}

  loadAll(offset?: number, limit?: number) {
    this.store.dispatch(TodoActions.loadAll({ offset, limit }));
  }
}
