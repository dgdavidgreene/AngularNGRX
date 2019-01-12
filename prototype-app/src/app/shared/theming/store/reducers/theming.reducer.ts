import { Action } from '@ngrx/store';
import { ThemingActions, ThemingActionTypes } from '../actions/theming.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ThemingActions): State {
  switch (action.type) {

    case ThemingActionTypes.LoadThemings:
      return state;


    default:
      return state;
  }
}
