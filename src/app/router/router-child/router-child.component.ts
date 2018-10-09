import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-router-child',
  templateUrl: './router-child.component.html'
})
export class RouterChildComponent implements OnInit {

  coinData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(() => this.route.snapshot.data.coinData)
    ).subscribe(coinData => this.coinData = coinData[0]);
  }



}
