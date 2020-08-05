import { Component } from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalServiceService} from './services/local-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalServiceService]
})
export class AppComponent {

  constructor(
    public appCounterService: AppCounterService,
    private localService: LocalServiceService ) {
  }
  count = 0;

  incr(): void{
    this.localService.increase();
    this.count = this.localService.counter;
  }
  decr(): void{
    this.localService.decrease();
    this.count = this.localService.counter;
  }

}
