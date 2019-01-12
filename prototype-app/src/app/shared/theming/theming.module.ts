import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTheming from './store/reducers/theming.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ThemingEffects } from './store/effects/theming.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('theming', fromTheming.reducer),
    EffectsModule.forFeature([ThemingEffects])
  ]
})
export class ThemingModule { }
