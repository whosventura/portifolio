import { createStore } from 'redux';

const initialState = {};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
