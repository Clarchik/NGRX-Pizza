import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {switchMapTo, map, catchError, tap, switchMap} from 'rxjs/operators';
import {PizzasService} from '../../services';
import {of} from 'rxjs';

import * as fromRoot from '../../../app/store/';
import * as pizzaActions from '../actions/pizzas/pizzas.action';

@Injectable()
export class PizzasEffects {
    constructor(private actions$: Actions, private pizzaService: PizzasService) {}


    @Effect()
    loadPizzas$ = this.actions$
        .pipe(
            ofType(pizzaActions.LOAD_PIZZAS),
            switchMapTo(this.pizzaService.getPizzas().pipe(
                map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError((error) => of(new pizzaActions.LoadPizzasFail(error)))
            ))
        );

    @Effect()
    createPizza$ = this.actions$
        .pipe(
            ofType(pizzaActions.CREATE_PIZZA),
            map((action: pizzaActions.CreatePizza) => action.payload),
            switchMap(pizza => this.pizzaService.createPizza(pizza)
                .pipe(
                    map(returnedPizza => new pizzaActions.CreatePizzaSuccess(returnedPizza)),
                    catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
                )
            )
        );

    @Effect()
    createPizzaSuccess$ = this.actions$
        .pipe(
            ofType(pizzaActions.CREATE_PIZZA_SUCCESS),
            map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
            map((pizza) => new fromRoot.Go({
                path: ['/products', pizza.id]
            }))
        );

    @Effect()
    updatePizza$ = this.actions$
        .pipe(
            ofType(pizzaActions.UPDATE_PIZZA),
            map((action: pizzaActions.UpdatePizza) => action.payload),
            switchMap(pizza => this.pizzaService.updatePizza(pizza).pipe(
                map(newPizza => new pizzaActions.UpdatePizzaSuccess(newPizza)),
                catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
            ))
        );

    @Effect()
    removePizza$ = this.actions$
        .pipe(
            ofType(pizzaActions.REMOVE_PIZZA),
            map((action: pizzaActions.RemovePizza) => action.payload),
            switchMap(pizza => this.pizzaService.removePizza(pizza).pipe(
                map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
            ))
        );

    @Effect()
    handlePizzaSuccess$ = this.actions$
        .pipe(
            ofType(
                pizzaActions.UPDATE_PIZZA_SUCCESS,
                pizzaActions.REMOVE_PIZZA_SUCCESS
            ),
            map(pizza => {
                return new fromRoot.Go({
                    path: ['/products'],
                });
            })
        );
}
