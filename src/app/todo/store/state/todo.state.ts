import { Todo } from "src/app/models";

export const featureName = 'todo';

export interface State {
  loading: boolean;
  todos: Todo [];
  error?: any;
}

export const initialState: State = {
  loading: false,
  todos: []
};
