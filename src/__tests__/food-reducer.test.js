'use strict';

import reducer from '../reducer/food-reducer';

it('can create a new food', () => {
  const state = [];
  const action = {
    type: 'FOOD_CREATE',
    payload: 'sushi',
  };
  expect(reducer(state, action)[0].name).toEqual('sushi');
});

it('can update the food with that id', () => {
  const state = [];
  const action = {
    type: 'FOOD_CREATE',
    payload: 'sushi',
  };

  const newState = reducer(state, action);
  const updatePayload = {
    type: 'FOOD_UPDATE',
    payload: { name: 'sushi2', id: newState[0].id },
  };

  expect(reducer(newState, updatePayload)[0].name).toEqual('sushi2');
});

it('can delete the food with that id', () => {
  const state = [];
  const action = {
    type: 'FOOD_CREATE',
    payload: 'sushi',
  };

  const newState = reducer(state, action);
  const updatePayload = {
    type: 'FOOD_DELETE',
    payload: newState[0].id,
  };

  expect(reducer(newState, updatePayload)).toEqual([]);
});
