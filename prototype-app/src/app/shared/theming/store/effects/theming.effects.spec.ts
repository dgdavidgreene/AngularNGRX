import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ThemingEffects } from './theming.effects';

describe('ThemingEffects', () => {
  let actions$: Observable<any>;
  let effects: ThemingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ThemingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
