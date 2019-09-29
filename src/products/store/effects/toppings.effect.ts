import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as toppingActions from '../actions/toppings.action';
import { switchMapTo, map, catchError, tap } from 'rxjs/operators';
import { ToppingsService } from '../../services';
import { of } from 'rxjs';

@Injectable()
export class ToppingsEffects {
    constructor(private actions$: Actions, private toppingService: ToppingsService) { }


    @Effect()
    loadToppings$ = this.actions$.pipe(ofType(toppingActions.LOAD_TOPPINGS))
        .pipe(
            switchMapTo(this.toppingService.getToppings().pipe(
                map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
                catchError((error) => of(new toppingActions.LoadToppingsFail(error)))
            ))
        );
}
