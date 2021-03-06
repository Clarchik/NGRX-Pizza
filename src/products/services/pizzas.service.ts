import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza.model';


import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PizzasService {
    constructor(private http: HttpClient) { }

    getPizzas(): Observable<Pizza[]> {
        return this.http
            .get<Pizza[]>(`/api/pizzas`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    createPizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .post<Pizza>('/api/pizzas', payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    updatePizza(payload: Pizza): Observable<any> {
        return this.http
            .put<Pizza>(`/api/pizzas/${payload.id}`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    removePizza(payload: Pizza): Observable<any> {
        return this.http
            .delete<any>(`/api/pizzas/${payload.id}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
