import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as TodoSelectors from './todo/store/selectors';
import * as TodoActions from './todo/store/actions';
import { TodoFacade } from './todo/store/todo.facade';
import { TodoStoreModule } from './todo/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//[1], [2]ともに実行結果は同じ。
export class AppComponent implements OnInit {
  //[1] - stateの取得をFacade経由で行う
  // loading$ = this.todoService.loading$;
  // todos$ = this.todoService.todos$;

  //[2] - stateをStoreから直接取得する
  todos$ = this.store.pipe(select(TodoSelectors.getTodos));

  constructor(private todoService: TodoFacade, private store: Store){}

  ngOnInit() {
    //[1] - ActionのディスパッチをFacade経由で行う
    // this.todoService.loadAll();

    //[2] - ActionのディスパッチをStoreに直接行う
    const offset = 0;
    const limit = 10;
    this.store.dispatch(TodoActions.loadAll({offset, limit}));
    }
}
