import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html'
})
export class ViewchildChildComponent {

  private _price: number;

  @Input()
  set price(val: number) {
    this._price = val;
  }
  get price(): number {
    return this._price;
  }

}
