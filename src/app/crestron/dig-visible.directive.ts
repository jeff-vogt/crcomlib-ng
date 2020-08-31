import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigVisible]'
})
export class DigVisibleDirective implements OnInit, OnDestroy{

  @Input('DigVisible') join: number;

  constructor(private el: ElementRef ) {  }

  ngOnInit() {
    this.setVisibility(CrComLib.getState('b', String(this.join)));
    CrComLib.subscribeState('b', String(this.join), (v) => { this.setVisibility(v); } );
  }
  ngOnDestroy() {

  }

  setVisibility(visJoin: boolean) {
    if (visJoin) {
      this.el.nativeElement.style.visibility = 'visible';
    }
    else{
      this.el.nativeElement.style.visibility = 'hidden';
    }
  }
}
