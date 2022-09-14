import { combineReducers } from 'redux';

import orderReducer from './_orderReducer';

const reducers = combineReducers({
  data: orderReducer,
});

export default reducers;
