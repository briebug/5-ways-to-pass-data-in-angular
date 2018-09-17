import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inputs-child1',
  templateUrl: './inputs-child1.component.html'
})
export class InputsChild1Component implements OnChanges {

  @Input()
  price: number;

  ngOnChanges(changes: SimpleChanges) {
    // you don't have to do anything with the passed changes
    console.log('[using ngOnChanges] price changed!', this.price);
  }

}
