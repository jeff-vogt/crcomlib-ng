import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[AnaFB]'
})
export class AnaFbDirective implements OnInit, OnDestroy{

  @Input('AnaFB') join: number;

  constructor(private el: ElementRef ) { }
  ngOnInit() {
    CrComLib.subscribeState('n', String(this.join), (v) => { this.el.nativeElement.value = v; } );
    this.el.nativeElement.value = CrComLib.getState('n', String(this.join));
  }
  ngOnDestroy() {
    // CrComLib.unSubscribeState('n', String(this.join));
  }
}
