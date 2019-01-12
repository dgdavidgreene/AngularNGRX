import { Action } from '@ngrx/store';

export enum ThemingActionTypes {
  LoadThemings = '[Theming] Load Themings'
}

export class LoadThemings implements Action {
  readonly type = ThemingActionTypes.LoadThemings;
}

export type ThemingActions = LoadThemings;
