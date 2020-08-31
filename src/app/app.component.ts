import { Component } from '@angular/core';
import { CrComService } from './crestron/crcom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crcom-basic';
  constructor(public crcom: CrComService) { }

}
