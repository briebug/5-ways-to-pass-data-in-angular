import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs-child2',
  templateUrl: './inputs-child2.component.html'
})
export class InputsChild2Component {

  // since a get accessor (get method) is required
  // to return a value, we must supply a private property
  // to hold the value so it can be set and get.
  private _price: number;

  @Input()
  set price(val: number) {
    this._price = val;
    console.log('[Input: using setter] reacting to price changed!', val);
  }
  get price(): number {
    return this._price;
  }

}
