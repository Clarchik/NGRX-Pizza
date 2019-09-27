import {HttpClient} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Pizza} from '../models/pizza.model';


import {catchError, map} from 'rxjs/operators';
import {Observable, } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PizzasService {
    constructor(private http: HttpClient, private firestore: AngularFirestore) {}

    getPizzas(): Observable<Pizza[]> {
        return this.firestore.collection('pizzas').snapshotChanges().pipe(
            map(data => data.map(item => {
                return {
                    ...item.payload.doc.data()
                };
            }))
        );
    }

    createPizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .post<Pizza>(`/api/pizzas`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    updatePizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .put<Pizza>(`/api/pizzas/${payload.id}`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    removePizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .delete<any>(`/api/pizzas/${payload.id}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
