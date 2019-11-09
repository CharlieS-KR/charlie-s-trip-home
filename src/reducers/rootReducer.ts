import { combineReducers, createStore } from 'redux';
import foodToMakeReducer from './foodToMakeReducer';


const rootReducer = combineReducers({
    food: foodToMakeReducer
});

const store = createStore(rootReducer);

export default store;