import { Pizza } from '../../models/pizza.model';

import * as fromPizzas from '../actions/pizzas/pizzas.action';
import * as fromUtils from '../../../shared/services';
import { from } from 'rxjs';

export interface PizzaState {
    entities: { [id: number]: Pizza };
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    entities: {},
    loading: false,
    loaded: false
};

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
    switch (action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return { ...state, loading: true };
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            const entities = fromUtils.mapToEntities(state, pizzas);
            return { ...state, loading: false, loaded: true, entities };
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }

        case fromPizzas.UPDATE_PIZZA_SUCCESS:
        case fromPizzas.CREATE_PIZZA_SUCCESS: {
            const pizza = action.payload;
            const entities = {
                ...state.entities,
                [pizza.id]: pizza
            };

            return {
                ...state,
                entities
            };
        }

        case fromPizzas.REMOVE_PIZZA_SUCCESS: {
            const pizza = action.payload;
            const { [pizza.id]: removed, ...entities } = state.entities;
            return {
                ...state,
                entities
            };
        }

        default: {
            return state;
        }
    }
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;
