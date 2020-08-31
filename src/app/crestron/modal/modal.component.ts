import { Component, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import { CrComService } from '../crcom.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() VisJoin: number;
  public visible: boolean;

  constructor(private el: ElementRef, private crcom: CrComService) { }
  ngOnInit() {
    this.showHide();
    this.crcom.update.subscribe(() => this.showHide());
  }
  ngOnDestroy() {
    this.crcom.update.unsubscribe();
  }
  showHide() {
    if (this.crcom.digFB[this.VisJoin] === true) { this.visible = true; console.log('show'); }
    else { this.visible = false; }
  }
}
