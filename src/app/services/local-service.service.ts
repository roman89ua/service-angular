import { Injectable } from '@angular/core';

@Injectable()
export class LocalServiceService {
  counter = 0;

  increase(): void{
    this.counter++;
  }

  decrease(): void{
    this.counter--;
  }
}
