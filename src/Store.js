import createStore from 'redux-zero';

const initialState = {
    board: [], 
    users: [
        {
            firstName: "Luisa",
            lastName: "Gonzales",
            email: "luisa@gmail.com", 
            password: "123456",
            boards: [
                {
                    id: 0,
                    title: "Por aprender"
                }
            ]
        }
    ]
}

const store = createStore(initialState);
export default store;