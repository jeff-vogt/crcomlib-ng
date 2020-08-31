import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// iport { CrComService } from '../crcom.service';
declare var CrComLib: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[DigPress]'
})
export class DigPressDirective {
  @Input('DigPress') join: number;

  private timerID: ReturnType<typeof setTimeout>;
  private disable: boolean;

  constructor(private el: ElementRef) { }


  @HostListener('touchstart') onTouchStart(){
    if (this.el.nativeElement.disabled !== true) {
      // this.crcom.press(this.join);
      CrComLib.publishEvent('b', String(this.join), true);
      this.disable = true;
      this.timerID = setTimeout(() => this.disable = false, 10);
    }
  }
  @HostListener('touchend', ['$event']) onTouchEnd(e) {
    if (this.el.nativeElement.disabled !== true) {
      e.preventDefault();
      // this.crcom.release(this.join);
      CrComLib.publishEvent('b', String(this.join), false);
      this.disable = true;
      this.timerID = setTimeout(() => this.disable = false, 10);
    }
  }
  @HostListener('touchcancel') onTouchCancel() {
    if (this.el.nativeElement.disabled !== true) {
      // this.crcom.release(this.join);
      CrComLib.publishEvent('b', String(this.join), false);
      this.disable = true;
      this.timerID = setTimeout(() => this.disable = false, 10);
    }
  }
  @HostListener('mousedown') onMouseDown() {
    if (!this.disable) {
      // this.crcom.press(this.join);
      CrComLib.publishEvent('b', String(this.join), true);
    }
  }
  @HostListener('mouseup') onMouseUp() {
    if (!this.disable) {
      // this.crcom.release(this.join);
      CrComLib.publishEvent('b', String(this.join), false);
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (!this.disable) {
      // this.crcom.release(this.join);
      CrComLib.publishEvent('b', String(this.join), false);
    }
  }
}
