import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import { CrComService } from './crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[AnaFB]'
})
export class AnaFbDirective implements OnInit, OnDestroy{

  @Input('AnaFB') join: number;

  constructor(private el: ElementRef, private crcom: CrComService) { }
  ngOnInit() {
    this.el.nativeElement.value = this.crcom.anaFB[this.join];
    this.crcom.update.subscribe(() => {
      this.el.nativeElement.value = this.crcom.anaFB[this.join];
    });
  }
  ngOnDestroy() {
    this.crcom.update.unsubscribe();
  }
}
