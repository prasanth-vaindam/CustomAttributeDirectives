import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { setGreenBackGround } from './Directives/GreenBackGround.directive';
import { SetBackgroundDirective } from './set-background.directive';
import { ApphoverDirective } from './Directives/apphover.directive';
import { HostbindingexampleDirective } from './Directives/hostbindingexample.directive';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    setGreenBackGround,
    SetBackgroundDirective,
    ApphoverDirective,
    HostbindingexampleDirective,
    HoverDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
