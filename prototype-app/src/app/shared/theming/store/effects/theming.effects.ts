import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ThemingActionTypes } from '../actions/theming.actions';

@Injectable()
export class ThemingEffects {

  @Effect()
  loadThemings$ = this.actions$.pipe(ofType(ThemingActionTypes.LoadThemings));

  constructor(private actions$: Actions) {}
}
