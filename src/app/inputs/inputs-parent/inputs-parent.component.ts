import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './inputs-parent.component.html'
})
export class InputsParentComponent {

  priceCtrl = new FormControl(200);

}
