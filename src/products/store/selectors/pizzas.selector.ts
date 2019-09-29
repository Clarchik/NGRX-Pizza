import { createSelector } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selector';


export const getPizzasState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntites = createSelector(
    getPizzasState,
    fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
    getPizzasEntites,
    fromRoot.getRouterState,
    (entities, router): Pizza => router.state && entities[router.state.params.pizzaId]
);

export const getPizzaVisualized = createSelector(
    getSelectedPizza,
    fromToppings.getToppingsEntities,
    fromToppings.getSectedToppings,
    (pizza, toppingEntities, selectedToppings) => {
        const toppings = selectedToppings.map(id => toppingEntities[id]);
        return { ...pizza, toppings };
    }
);

export const getAllPizzas = createSelector(
    getPizzasEntites,
    (entities) => Object.keys(entities).map(id => entities[id])
);

export const getPizzasLoaded = createSelector(
    getPizzasState,
    fromPizzas.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
    getPizzasState,
    fromPizzas.getPizzasLoading
);
