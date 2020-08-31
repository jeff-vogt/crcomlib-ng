import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import { CrComService } from './crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigVisible]'
})
export class DigVisibleDirective implements OnInit, OnDestroy{

  @Input('DigVisible') join: number;

  constructor(private el: ElementRef, private crcom: CrComService) {  }

  ngOnInit() {
    this.setVisibility();
    this.crcom.update.subscribe(() => this.setVisibility());
  }
  ngOnDestroy() {
    this.crcom.update.unsubscribe();
  }

  setVisibility() {
    if (this.crcom.digFB[this.join] === true) {
      this.el.nativeElement.style.visibility = 'visible';
    }
    else{
      this.el.nativeElement.style.visibility = 'hidden';
    }
  }
}
