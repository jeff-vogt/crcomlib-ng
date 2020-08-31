import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[SerFB]'
})
export class SerFbDirective implements OnInit, OnDestroy{

  @Input('SerFB') join: number;

  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.innerHTML = CrComLib.getState('s', String(this.join));
    CrComLib.subscribeState('s', String(this.join), (v) => { this.el.nativeElement.innerHTML = v; });
  }
  ngOnDestroy() {
  }
}
