import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import { CrComService } from './crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigEnable]'
})
export class DigEnableDirective implements OnInit, OnDestroy{

  @Input('DigEnable') join: number;

  constructor(private el: ElementRef, private crcom: CrComService) {  }

  ngOnInit() {
    this.setEnabled();
    this.crcom.update.subscribe(() => this.setEnabled());
  }
  ngOnDestroy() {
    this.crcom.update.unsubscribe();
  }

  setEnabled() {
    if (this.crcom.digFB[this.join] === true) {
      this.el.nativeElement.disabled = false;
    }
    else{
      this.el.nativeElement.disabled = true;
    }
  }
}
