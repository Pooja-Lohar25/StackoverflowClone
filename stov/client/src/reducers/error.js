const errorReducer = (state = {data:null}, action) => {
    switch (action.type) {
        case 'SETERRORMSG':
            localStorage.setItem('Message', action.data)
            return state
        default:
            return state;
    }
}

export default errorReducer