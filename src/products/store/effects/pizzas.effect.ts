import {Injectable} from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';

import * as pizzaActions from '../actions/pizzas.action';
import {switchMapTo, map, catchError} from 'rxjs/operators';
import {PizzasService} from '../../services';
import {of} from 'rxjs';

@Injectable()
export class PizzasEffects {
    constructor(private actions$: Actions, private pizzaService: PizzasService) { }


    @Effect()
    loadPizzas$ = this.actions$.pipe(ofType(pizzaActions.LOAD_PIZZAS))
        .pipe(
            switchMapTo(this.pizzaService.getPizzas().pipe(
                map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError((error) => of(new pizzaActions.LoadPizzasFail(error)))
            ))
        );
}
