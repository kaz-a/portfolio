import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import work from './work';

const reducer = combineReducers({
  work
})

const middleWare = applyMiddleware(thunkMiddleware, createLogger())
export default createStore(reducer, middleWare);