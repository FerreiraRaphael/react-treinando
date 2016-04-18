import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers  } from 'redux'

import {todo} from "./reducers/todo"
import {filtro} from "./reducers/filtro"

const reducers = combineReducers({filtro,todo});

const store = createStore(reducers);

export default store;