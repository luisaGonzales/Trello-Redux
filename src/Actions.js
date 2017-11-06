import store from './Store';

export const signIn = (email, password) => {
    const users = [...store.getState().users]; 
    const addUser = users.concat({
        email: email,
        password: password
    });
    store.setState({
        users: addUser
    });
    console.log(store.getState().users);
}

export const signUp = (firstName, lastName, email, password, confirmPassword) => {
    const users = [...store.getState().users];
    const addUser = users.concat({
        firstName: firstName,
        lastName: lastName,
        email: email, 
        password: password,
        confirmPassword: confirmPassword
    });
}

//overflow: auto.
