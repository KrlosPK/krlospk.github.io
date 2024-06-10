import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    Aos.init({
      duration: 700,
      once: true,
    });

    window.addEventListener('load', () => {
      Aos.refresh();
    });
  }
}
