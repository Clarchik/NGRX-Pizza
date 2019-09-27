import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getPizzasState = createSelector(
    getProductsState,
    (state: ProductsState) => state.pizzas
);

export const getPizzasEntites = createSelector(getPizzasState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntites, (entities) => Object.keys(entities).map(id => entities[id]));
export const getPizzasLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
