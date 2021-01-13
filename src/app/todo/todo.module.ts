import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TodoStoreModule } from "./store";
import { TodoComponent } from './containers';


@NgModule({
  imports: [
    CommonModule,
    TodoStoreModule //作成したTodoStoreModule (ReducerとEffectが登録されたfeature state用のモジュール)
  ],
  exports: [TodoComponent],
  declarations: [TodoComponent]
})

export class TodoModule {}
