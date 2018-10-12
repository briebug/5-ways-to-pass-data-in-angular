import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  templateUrl: './viewchild-parent.component.html'
})
export class ViewchildParentComponent {

  priceCtrl = new FormControl(200);
  childPrice: number;

  @ViewChild('price') child;

  setChildPrice() {
    this.child.price = this.priceCtrl.value;
  }

  getChildPrice() {
    this.childPrice = this.child.price;
  }

}
