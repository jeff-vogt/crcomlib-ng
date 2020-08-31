import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigEnable]'
})
export class DigEnableDirective implements OnInit, OnDestroy{

  @Input('DigEnable') join: number;

  constructor(private el: ElementRef ) {  }

  ngOnInit() {
    this.setEnabled(CrComLib.getState('b', String(this.join)));
    CrComLib.subscribeState('b', String(this.join), (v) => { this.setEnabled(v); } );
  }
  ngOnDestroy() {

  }

  setEnabled(enJoin: boolean) {
    if (enJoin) {
      this.el.nativeElement.disabled = false;
    }
    else{
      this.el.nativeElement.disabled = true;
    }
  }
}
