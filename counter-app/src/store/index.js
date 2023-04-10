import { createStore } from 'redux';

function reducer(state = { value: 100, step: 1, max: Infinity }, action) {
    switch (action.type) {
        case 'increment':
            if (state.value + state.step <= state.max) {
                return { ...state, value: state.value + state.step };
            } else {
                return { ...state }
            }
        case 'decrement':
            return { ...state, value: state.value - state.step };
        case 'reset':
            return { ...state, value: 0 };
        case 'changeStep':
            return { ...state, step: action.payload }
        case 'changeMax':
            return { ...state, max: action.payload }
        default:
            return state;
    }
}


let store = createStore(reducer);

export default store;