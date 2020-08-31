import { Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import { CrComService } from './crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[SerFB]'
})
export class SerFbDirective implements OnInit, OnDestroy{

  @Input('SerFB') join: number;

  constructor(private el: ElementRef, private crcom: CrComService) { }
  ngOnInit() {
    this.el.nativeElement.innerHTML = this.crcom.serFB[this.join];
    this.crcom.update.subscribe(() => {
      this.el.nativeElement.innerHTML = this.crcom.serFB[this.join];
    });
  }
  ngOnDestroy() {
    this.crcom.update.unsubscribe();
  }
}
