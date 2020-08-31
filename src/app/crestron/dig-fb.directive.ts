import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigFB]'
})
export class DigFbDirective implements OnInit, OnDestroy{

  @Input('DigFB') join: number;

  constructor(private el: ElementRef ) {  }

  ngOnInit() {
    this.setFB(CrComLib.getState('b', String(this.join)));
    CrComLib.subscribeState('b', String(this.join), (v) => { this.setFB(v); } );
  }
  ngOnDestroy() {
  }
  setFB(fbJoin: boolean){
    if (fbJoin) {
      if (!this.el.nativeElement.classList.contains('active')){
        this.el.nativeElement.classList.add('active');
      }
    }
    else{
      if (this.el.nativeElement.classList.contains('active')){
        this.el.nativeElement.classList.remove('active');
      }
    }
  }
}
