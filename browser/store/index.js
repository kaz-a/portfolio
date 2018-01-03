import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import projects from './projects';

const reducer = combineReducers({
  projects
})

const middleWare = applyMiddleware(thunkMiddleware, createLogger())
export default createStore(reducer, middleWare);