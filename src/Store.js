import createStore from 'redux-zero';

const initialState = {
    board: []
}

const store = createStore(initialState);
export default store;