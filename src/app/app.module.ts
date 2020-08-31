import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DigPressDirective } from './crestron/dig-press.directive';
import { DigEnableDirective } from './crestron/dig-enable.directive';
import { DigVisibleDirective } from './crestron/dig-visible.directive';
import { DigFbDirective } from './crestron/dig-fb.directive';
import { AnaSendDirective } from './crestron/ana-send.directive';
import { AnaFbDirective } from './crestron/ana-fb.directive';
import { SerSendDirective } from './crestron/ser-send.directive';
import { SerFbDirective } from './crestron/ser-fb.directive';
import { ModalComponent } from './crestron/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DigPressDirective,
    DigEnableDirective,
    DigVisibleDirective,
    DigFbDirective,
    AnaSendDirective,
    AnaFbDirective,
    SerSendDirective,
    SerFbDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
