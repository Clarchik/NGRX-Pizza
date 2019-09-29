import * as fromToppings from '../actions/toppings.action';
import { Topping } from 'src/products/models/topping.model';
import * as fromUtils from '../../../shared/services';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loading: boolean;
    loaded: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loading: false,
    loaded: false,
    selectedToppings: []
};

export function reducer(state = initialState, action: fromToppings.ToppingsAction) {
    switch (action.type) {
        case fromToppings.LOAD_TOPPINGS: {
            return { ...state, loading: true };
        }

        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = action.payload;
            const entities = fromUtils.mapToEntities(state, toppings);
            return {
                ...state,
                loaded: true,
                loading: false,
                entities
            };
        }

        case fromToppings.LOAD_TOPPINGS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }

        case fromToppings.VISUALIZE_TOPPINGS: {
            const selectedToppings = action.payload;
            return {
                ...state,
                selectedToppings
            };
        }

        default: {
            return state;
        }
    }
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
