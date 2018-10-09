import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BitcoinService } from '../bitcoin.service';

@Component({
  templateUrl: './bs-parent.component.html'
})
export class BsParentComponent implements OnInit {

  amount = new FormControl();

  constructor(public service: BitcoinService) { }

  ngOnInit() {
  }

  changeAmount() {
    this.service.augmentValue(this.amount.value);
  }

}
