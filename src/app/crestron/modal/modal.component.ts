import { Component, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
declare var CrComLib: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() VisJoin: number;
  public visible: boolean;

  constructor(private el: ElementRef ) { }
  ngOnInit() {
    // this.showHide();
    // this.crcom.update.subscribe(() => this.showHide());

    this.showHide(CrComLib.getState('b', String(this.VisJoin)));
    CrComLib.subscribeState('b', String(this.VisJoin), (v) => { this.showHide(v); } );
  }
  ngOnDestroy() {

  }
  showHide(visState: boolean) {
    if (visState) { this.visible = true; }
    else { this.visible = false; }
  }
}
