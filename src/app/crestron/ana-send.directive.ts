import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CrComService } from './crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[AnaSend]'
})
export class AnaSendDirective {
  @Input('AnaSend') join: number;

  constructor(private el: ElementRef, private crcom: CrComService) { }

  @HostListener('input') onInput(){

    CrComLib.publishEvent('n', String(this.join), Number(this.el.nativeElement.value));
    // this.crcom.ana_send(this.join, this.el.nativeElement.value);
  }
}
