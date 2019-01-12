import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation: AnimationTriggerMetadata =
  trigger('fadeInAnimation', [
    state('true' , style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('1 => 0', animate('100ms')),
    transition('0 => 1', animate('250ms'))
  ]);