import {Pizza} from '../../models/pizza.model';

import * as fromPizzas from '../actions/pizzas.action';

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
            return {...state, loading: true};
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            const entities = pizzas.reduce((prevPizza: {[id: number]: Pizza}, pizza: Pizza) => {
                return {
                    ...prevPizza,
                    [pizza.id]: pizza
                };
            }, {...state.entities});
            return {...state, loading: false, loaded: true, entities};
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {...state, loading: false, loaded: false};
        }

        default: {
            return state;
        }
    }
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;