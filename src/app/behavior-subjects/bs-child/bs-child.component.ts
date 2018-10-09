import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bs-child',
  templateUrl: './bs-child.component.html'
})
export class BsChildComponent implements OnInit {

  amount = new FormControl();

  constructor(public service: BitcoinService) { }

  ngOnInit() {
  }

  changeAmount() {
    this.service.augmentValue(this.amount.value);
  }

}
