import * as api from '../api'
import { setCurrentUser } from './currentUser'
import {fetchAllUsers} from './users'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const data = await api.signUp(authData)
        dispatch({ type: 'AUTH', data:data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        dispatch(fetchAllUsers());
        navigate('/')
        console.log(authData)
    } catch (error) {
        // localStorage.setItem('Message',error.response.data.message)
        dispatch({type:'SETERRORMSG',data:error.response.data.message})
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data:data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        navigate('/')
    } catch (error) {
        // localStorage.setItem('Message',error.response.data.message)
        dispatch({type:'SETERRORMSG',data:error.response.data.message})
        console.log(error)
    }
}