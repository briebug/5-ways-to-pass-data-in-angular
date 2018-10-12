import { Component } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bs-child',
  templateUrl: './bs-child.component.html'
})
export class BsChildComponent {

  amount = new FormControl();

  constructor(public service: BitcoinService) { }

  changeAmount() {
    this.service.augmentValue(this.amount.value);
  }

}
