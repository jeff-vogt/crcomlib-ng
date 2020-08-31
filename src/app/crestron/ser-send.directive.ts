import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[SerSend]'
})
export class SerSendDirective {
  @Input('SerSend') join: number;

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput(){
    CrComLib.publishEvent('s', String(this.join), this.el.nativeElement.value);
  }
}
