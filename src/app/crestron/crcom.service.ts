import { Injectable, EventEmitter } from '@angular/core';
declare var CrComLib: any;

@Injectable({
  providedIn: 'root'
})
export class CrComService {
  public digFB = Array(4001).fill(false);
  public anaFB = Array(4001).fill(0);
  public serFB = Array(4001).fill('xx');
  public update: EventEmitter<number> = new EventEmitter();
  public message: string;
  private polltimer = {};

  constructor() {
    for (let i = 0; i < 4001; i++) {
      CrComLib.subscribeState('b', String(i), (v) => { this.digFB[i] = v; } );
      CrComLib.subscribeState('n', String(i), (v) => { this.anaFB[i] = v; } );
      CrComLib.subscribeState('s', String(i), (v) => { this.serFB[i] = v; } );
    }
    this.message = 'Initializing...';
    setInterval(() => this.osc(), 10000);
  }


  private osc(){
    this.message = 'In Update';
    // CrComLib.publishEvent('b', '11', true);
    this.update.emit();
  }
}
