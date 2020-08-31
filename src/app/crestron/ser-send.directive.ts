import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// import { CrComService } from '../crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[SerSend]'
})
export class SerSendDirective {
  @Input('SerSend') join: number;

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput(){
    // this.crcom.ser_send(this.join, this.el.nativeElement.value);
    CrComLib.publishEvent('s', String(this.join), this.el.nativeElement.value);
  }
}
