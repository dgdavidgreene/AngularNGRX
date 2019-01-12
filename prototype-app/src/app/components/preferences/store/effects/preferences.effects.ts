import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PreferencesActionTypes } from '../actions/preferences.actions';

@Injectable()
export class PreferencesEffects {

  @Effect()
  loadPreferencess$ = this.actions$.pipe(ofType(PreferencesActionTypes.LoadPreferencess));

  constructor(private actions$: Actions) {}
}
