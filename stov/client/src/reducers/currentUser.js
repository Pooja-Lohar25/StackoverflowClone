const currentUserReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            const User = JSON.parse(localStorage.getItem('Profile'))
            return User;
        default:
            return state;
    }
}

export default currentUserReducer;