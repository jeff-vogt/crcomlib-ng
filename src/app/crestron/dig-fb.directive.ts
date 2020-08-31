import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import { CrComService } from './crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigFB]'
})
export class DigFbDirective implements OnInit, OnDestroy{

  @Input('DigFB') join: number;

  constructor(private el: ElementRef, private crcom: CrComService) {  }

  ngOnInit() {
    this.setFB();
    this.crcom.update.subscribe(() => this.setFB());
  }
  ngOnDestroy() {
    this.crcom.update.unsubscribe();
  }
  setFB(){
    if (this.crcom.digFB[this.join] === true) {
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
