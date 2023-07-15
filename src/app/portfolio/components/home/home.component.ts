import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .portfolio-bounce {
        animation: portfolio-bounce 1s infinite;
      }

      @keyframes portfolio-bounce {
        0%,
        100% {
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          transform: translate(-50%, 0);
        }

        50% {
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          transform: translate(-50%, 25%);
        }
      }
    `,
  ],
})
export class HomeComponent {}
