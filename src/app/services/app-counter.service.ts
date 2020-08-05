import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'}) // providedIn: 'root' use only if we don't want to use root module providers field
export class AppCounterService{
  counter = 0;

  increase(): void{
    this.counter++;
  }

  decrease(): void{
    this.counter--;
  }
}
