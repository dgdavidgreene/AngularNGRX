import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AdminActionTypes } from '../actions/admin.actions';

@Injectable()
export class AdminEffects {

  @Effect()
  loadAdmins$ = this.actions$.pipe(ofType(AdminActionTypes.LoadAdmins));

  constructor(private actions$: Actions) {}
}
