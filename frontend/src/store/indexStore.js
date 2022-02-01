
import { combineReducers } from 'redux';
import { todos, filter} from './reducers';
import { createStore } from 'redux';







const globalReducers = combineReducers({ todos , filter});
const store = createStore(globalReducers);
export default store;