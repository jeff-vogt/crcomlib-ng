import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[AnaSend]'
})
export class AnaSendDirective {
  @Input('AnaSend') join: number;

  constructor(private el: ElementRef ) { }

  @HostListener('input') onInput(){

    CrComLib.publishEvent('n', String(this.join), Number(this.el.nativeElement.value));
  }
}
