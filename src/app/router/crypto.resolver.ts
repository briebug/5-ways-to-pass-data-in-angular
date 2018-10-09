import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CryptoResolver implements Resolve<Observable<any>> {

  apiUrl = 'https://api.coinmarketcap.com/v2/ticker/';

  constructor(private http:  HttpClient) { }

  // for the demo this resolver hits the same endpoint
  // regardless of the route which is very inefficient -
  // however it's similar to making a GET request for
  // a specific ID
  resolve(route: ActivatedRouteSnapshot) {
    return this.http.get<any>(this.apiUrl).pipe(
      map(result => {
        const symbol = route.paramMap.get('symbol');
        return Object.values(result.data).filter((coin: any) => coin.symbol === symbol);
      })
    );
  }
}
