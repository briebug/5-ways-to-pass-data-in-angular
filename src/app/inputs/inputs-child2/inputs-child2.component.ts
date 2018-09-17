import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs-child2',
  templateUrl: './inputs-child2.component.html'
})
export class InputsChild2Component {

  // since a get accessor (get or set method) is required
  // to return a value, we must supply a private property
  // to hold the value so it can be set and get.
  private _price: number;

  get price(): number {
    return this._price;
  }
  @Input()
  set price(value: number) {
    this._price = value;
    console.log('[using setter] price changed!', value);
  }

}
