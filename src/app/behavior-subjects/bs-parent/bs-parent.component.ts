import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BitcoinService } from '../bitcoin.service';

@Component({
  templateUrl: './bs-parent.component.html'
})
export class BsParentComponent {

  amount = new FormControl();

  constructor(public service: BitcoinService) { }

  changeAmount() {
    this.service.augmentValue(this.amount.value);
  }

}
