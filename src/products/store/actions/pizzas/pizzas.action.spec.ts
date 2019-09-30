import {Pizza} from '../../../models/pizza.model';

import * as pizzasActions from './pizzas.action';

describe('Pizzas Action', () => {
    describe('Load Pizzas Actions', () => {
        describe('Load Pizzas', () => {
            it('shoud create an action', () => {
                const action = new pizzasActions.LoadPizzas();
                expect({...action}).toEqual({
                    type: pizzasActions.LOAD_PIZZAS
                });
            });
        });

        describe('Load Pizzas Fail', () => {
            it('shoud create an action', () => {
                const payload = {message: 'Load Error'};
                const action = new pizzasActions.LoadPizzasFail(payload);
                expect({...action}).toEqual({
                    type: pizzasActions.LOAD_PIZZAS_FAIL,
                    payload,
                });
            });
        });

        describe('Load Pizzas Success', () => {
            it('shoud create an action', () => {
                const payload: Pizza[] = [
                    {
                        id: 1,
                        name: 'Pizza #1',
                        toppings: [
                            {id: 1, name: 'onion'},
                            {id: 2, name: 'mushroom'},
                            {id: 3, name: 'basil'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'Pizza #2',
                        toppings: [
                            {id: 1, name: 'onion'},
                            {id: 2, name: 'mushroom'},
                            {id: 3, name: 'basil'},
                        ],
                    },
                ];
                const action = new pizzasActions.LoadPizzasSuccess(payload);
                expect({...action}).toEqual({
                    type: pizzasActions.LOAD_PIZZAS_SUCCESS,
                    payload,
                });
            });
        });
    });

    describe('Create Pizzas Actions', () => {
        describe('CreatePizza', () => {
            it('should create an action', () => {
                const payload = {
                    name: 'Pizza #2',
                    toppings: [
                        {id: 1, name: 'onion'},
                        {id: 2, name: 'mushroom'},
                        {id: 3, name: 'basil'},
                    ],
                };
                const action = new pizzasActions.CreatePizza(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.CREATE_PIZZA,
                    payload,
                });
            });
        });

        describe('CreatePizzaFail', () => {
            it('should create an action', () => {
                const payload = {message: 'Create Error'};
                const action = new pizzasActions.CreatePizzaFail(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.CREATE_PIZZA_FAIL,
                    payload,
                });
            });
        });

        describe('CreatePizzaSuccess', () => {
            it('should create an action', () => {
                const payload = {
                    id: 2,
                    name: 'Pizza #2',
                    toppings: [
                        {id: 1, name: 'onion'},
                        {id: 2, name: 'mushroom'},
                        {id: 3, name: 'basil'},
                    ],
                };
                const action = new pizzasActions.CreatePizzaSuccess(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.CREATE_PIZZA_SUCCESS,
                    payload,
                });
            });
        });
    });

    describe('Update Pizzas Actions', () => {
        describe('Update Pizza', () => {
            it('should create an action', () => {
                const payload = {
                    id: 2,
                    name: 'Pizza #2',
                    toppings: [
                        {id: 1, name: 'onion'},
                        {id: 2, name: 'mushroom'},
                        {id: 3, name: 'basil'},
                    ],
                };
                const action = new pizzasActions.UpdatePizza(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.UPDATE_PIZZA,
                    payload,
                });
            });
        });

        describe('Update Pizza Fail', () => {
            it('should create an action', () => {
                const payload = {message: 'Update Error'};
                const action = new pizzasActions.UpdatePizzaFail(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.UPDATE_PIZZA_FAIL,
                    payload,
                });
            });
        });

        describe('Update Pizza Success', () => {
            it('should create an action', () => {
                const payload = {
                    id: 2,
                    name: 'Pizza #2',
                    toppings: [
                        {id: 1, name: 'onion'},
                        {id: 2, name: 'mushroom'},
                        {id: 3, name: 'basil'},
                    ],
                };
                const action = new pizzasActions.UpdatePizzaSuccess(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.UPDATE_PIZZA_SUCCESS,
                    payload,
                });
            });
        });
    });

    describe('Remove Pizzas Actions', () => {
        describe('Remove Pizza', () => {
            it('should create an action', () => {
                const payload = {
                    id: 2,
                    name: 'Pizza #2',
                    toppings: [
                        {id: 1, name: 'onion'},
                        {id: 2, name: 'mushroom'},
                        {id: 3, name: 'basil'},
                    ],
                };
                const action = new pizzasActions.RemovePizza(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.REMOVE_PIZZA,
                    payload,
                });
            });
        });

        describe('Remove Pizza Fail', () => {
            it('should create an action', () => {
                const payload = {message: 'Remove Error'};
                const action = new pizzasActions.RemovePizzaFail(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.REMOVE_PIZZA_FAIL,
                    payload,
                });
            });
        });

        describe('Remove Pizza Success', () => {
            it('should create an action', () => {
                const payload = {
                    id: 2,
                    name: 'Pizza #2',
                    toppings: [
                        {id: 1, name: 'onion'},
                        {id: 2, name: 'mushroom'},
                        {id: 3, name: 'basil'},
                    ],
                };
                const action = new pizzasActions.RemovePizzaSuccess(payload);

                expect({...action}).toEqual({
                    type: pizzasActions.REMOVE_PIZZA_SUCCESS,
                    payload,
                });
            });
        });
    });
});
