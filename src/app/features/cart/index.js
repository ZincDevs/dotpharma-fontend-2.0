import { combineReducers } from 'redux';

import populationReducer from './_cartReducer';

const reducers = combineReducers({
  data: populationReducer,
});

export default reducers;
