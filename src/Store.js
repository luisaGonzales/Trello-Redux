import createStore from 'redux-zero';

const initialState = {
    board: [], 
    users: []
}

const store = createStore(initialState);
export default store;