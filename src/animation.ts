import { trigger, style, animate, transition, state } from '@angular/animations';
export let fade= trigger('fade', [
    state('show', style({
      opacity: 1,
      transform: "translateX(0)"
    })),
    state('hide',   style({
      opacity: 0,
      transform: "translateX(-100%)"
    })),
    transition('show => hide', animate('700ms ease-out')),
    transition('hide => show', animate('700ms ease-in'))
  ])