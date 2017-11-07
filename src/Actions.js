import store from './Store';

export const signIn = (email, password) => {
    const users = [...store.getState().users]; 
    console.log(users);
    let user = users.map(user => {
        if(user.email == email){
            if(user.password == password){
                
            }
        }
    }) 
    console.log(store.getState().users);
}

export const signUp = (firstName, lastName, email, password, confirmPassword) => {
    const users = [...store.getState().users];
    if(password == confirmPassword) {
        const addUser = users.concat({
            firstName: firstName,
            lastName: lastName,
            email: email, 
            password: password,
            boards: []
        });
        store.setState({
            users: addUser
        });
    } else {
        alert("Las contraseñas no son iguales");
    }
    console.log(store.getState().users);
    
}

//overflow: auto.
