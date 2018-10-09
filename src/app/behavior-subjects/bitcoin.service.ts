import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  bitcoinValue = 6572.01;
  bitcoinValueSubject = new BehaviorSubject<number>(this.bitcoinValue);

  constructor() { }

  augmentValue(amount: number) {
    this.bitcoinValue += +amount;
    this.bitcoinValueSubject.next(this.bitcoinValue);
  }
}
