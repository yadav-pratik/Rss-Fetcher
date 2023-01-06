import axios from 'axios'

import { normalAlert } from '../sweetAlerts/sweetAlerts'

export const startLoginUser =  (formData, clearAndDispatch) => {
    return (
        async () => {
            try {
                const { data } = await axios.post('http://localhost:3040/api/users/login',formData)
                if(data.hasOwnProperty('notice')){
                    normalAlert(data.notice, 'error')
                } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                    normalAlert(data.message, 'error')
                } else if(data.hasOwnProperty('token')){
                    normalAlert('Login Successful', 'success')
                    localStorage.setItem('token',data.token)
                    clearAndDispatch()
                }
            } catch (error) {
                normalAlert(error.message, 'error')
            }
        }
    )
}

export const startGetUser = () => {
    return (
        async (dispatch) => {
            try {
                const {data} = await axios.get('http://localhost:3040/api/users/account',{
                    headers : {
                        authorization : localStorage.getItem('token')
                    }
                })
                dispatch(setUser(data))
            } catch (error) {
                normalAlert(error.message, 'error')
            }
        }
    )
}

const setUser = (user) => {
    return {
        type : 'SET_USER',
        payload : user
    }
}

export const logoutUser = () => {
    return {
        type : 'LOGOUT_USER'
    }
}
