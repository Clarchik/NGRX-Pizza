import { Injectable } from '@angular/core';

import { Topping } from '../models/topping.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ToppingsService {
    constructor(private http: HttpClient) { }

    getToppings(): Observable<Topping[]> {
        return this.http.get<Topping[]>('/api/toppings');
    }
}
