import {Injectable} from '@angular/core';

import {Topping} from '../models/topping.model';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ToppingsService {
    constructor(private http: HttpClient) {}

    getToppings(): Observable<Topping[]> {
        const toggings = [
            {
              id: 1,
              name: 'anchovy'
            },
            {
              id: 2,
              name: 'bacon'
            },
            {
              id: 3,
              name: 'basil'
            },
            {
              id: 4,
              name: 'chili'
            },
            {
              id: 5,
              name: 'mozzarella'
            },
            {
              id: 6,
              name: 'mushroom'
            },
            {
              id: 7,
              name: 'olive'
            },
            {
              id: 8,
              name: 'onion'
            },
            {
              id: 9,
              name: 'pepper'
            },
            {
              id: 10,
              name: 'pepperoni'
            },
            {
              id: 11,
              name: 'sweetcorn'
            },
            {
              id: 12,
              name: 'tomato'
            }
        ];
        return of(toggings);
    }
}
