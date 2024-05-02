

import { legacy_createStore as createStore} from 'redux';

const initialState= {counter: 0};

const counterReducer= (state= initialState, action)=> {

    if (action.type === 'increment') {
        return {
            counter: counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: counter -1
        };
    }
    return state;
};

const store= createStore(counterReducer);

export default store;