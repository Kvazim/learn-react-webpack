import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reposReduser from './reposReduser';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    repos: reposReduser,
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))