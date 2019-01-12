import { Action } from '@ngrx/store';
import { PreferencesActions, PreferencesActionTypes } from '../actions/preferences.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: PreferencesActions): State {
  switch (action.type) {

    case PreferencesActionTypes.LoadPreferencess:
      return state;


    default:
      return state;
  }
}
