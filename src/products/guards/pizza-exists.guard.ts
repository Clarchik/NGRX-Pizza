import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Pizza } from 'src/products/models/pizza.model';

import * as fromStore from '../store';
import { switchMap, map, take, tap, filter } from 'rxjs/operators';

@Injectable()
export class PizzaExistsGuards implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => {
                const id = parseInt(route.params.pizzaId, 10);
                return this.hasPizza(id);
            })
        );
    }

    hasPizza(id: number): Observable<boolean> {
        return this.store
            .select(fromStore.getPizzasEntites)
            .pipe(
                map((entities: { [key: number]: Pizza }) => !!entities[id]),
                take(1)
            );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getPizzasLoaded).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.LoadPizzas());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }
}
