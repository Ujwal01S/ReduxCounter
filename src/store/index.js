

import { createStore} from 'redux';

const initialState= {count: 0};

const counterReducer= (state= initialState, action)=> {

    if (action.type === 'increment') {
        return {
            count: state.count + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            count: state.count -1
        };
    }
    return state;
};

const store= createStore(counterReducer);

export default store;