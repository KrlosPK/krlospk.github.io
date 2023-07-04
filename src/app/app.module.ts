import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioModule } from './portfolio/portfolio.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
