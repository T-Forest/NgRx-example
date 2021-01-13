import { createFeatureSelector, createSelector} from '@ngrx/store';

import { State, featureName } from '../state';

const getState = createFeatureSelector<State>(featureName);
export const getLoading = createSelector(getState, state => state.loading);
export const getTodos = createSelector(getState, state => state.todos);

