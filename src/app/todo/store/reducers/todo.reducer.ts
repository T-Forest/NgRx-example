 import { Action, createReducer, on} from '@ngrx/store';
 import { State, initialState } from '../state';
 import * as TodoActions from '../actions';

 //各Actionに対する状態遷移を、onを使って定義
 //@ngrx/entityを使うともっと簡潔にCRUD操作を記載できる。
 export const reducer =  createReducer(
   initialState,
   on(TodoActions.loadAll, state => {
     return { ...state, loading: true };
   }),
   on(TodoActions.loadAllSuccess, (state, { todos }) => {
     return { ...state, loading: false, todos: [...state.todos, ...todos] };
   }),
   on(TodoActions.loadAllFailure, (state, { error }) => {
     return { ...state, loading: false, error };
   }),
 );
