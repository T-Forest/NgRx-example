import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models';

//createAction(@ngrx/store)を使ってActionを作成
//第１引数：Actionの名称　[Source] Event の形式(Good Action Hygiene)
//第２引数：Actionのペイロード　props(@ngrx/store)を使うと簡潔に書ける
export const loadAll = createAction(
  '[Todo Page] Load All',
  props<{ offset?: number; limit?: number }>()
);

export const loadAllSuccess = createAction(
  '[Todo API] Load All Success',
  props<{todos: Todo[] }>()
);

//以下のようにも書ける。　action.payloadの形でペイロードを取り出せる。
// export const createSuccess = createAction(
//   '[Todo Page] Load All',
//   (payload: { todos: Todo[] }) => ({ payload })
// );

export const loadAllFailure = createAction(
  '[Todo API] Load All Failure',
  props<{error: any}>()
);
