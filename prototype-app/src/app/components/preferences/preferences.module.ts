import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPreferences from './store/reducers/preferences.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PreferencesEffects } from './store/effects/preferences.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('preferences', fromPreferences.reducer),
    EffectsModule.forFeature([PreferencesEffects])
  ]
})
export class PreferencesModule { }
