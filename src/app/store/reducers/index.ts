import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { State } from '../states';

/**
 * Reducers
 */
export const reducers: ActionReducerMap<State> = {};

/**
 * Meta reducer
 */
export const metaReducers: MetaReducer<State>[] = [logger];

/**
 * Logger ：　metaReducersに差し込める前処理。追加は任意。
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('state', result);
    console.groupEnd();
    return result;
  };
}

