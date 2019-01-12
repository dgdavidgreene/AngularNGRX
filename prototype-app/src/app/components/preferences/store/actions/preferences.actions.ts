import { Action } from '@ngrx/store';

export enum PreferencesActionTypes {
  LoadPreferencess = '[Preferences] Load Preferencess'
}

export class LoadPreferencess implements Action {
  readonly type = PreferencesActionTypes.LoadPreferencess;
}

export type PreferencesActions = LoadPreferencess;
