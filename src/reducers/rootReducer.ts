import { combineReducers, createStore } from 'redux';
import foodToMakeReducer from './foodToMakeReducer';


const rootReducer = combineReducers({
    foodToMake: foodToMakeReducer
});

const store = createStore(rootReducer);

export default store;