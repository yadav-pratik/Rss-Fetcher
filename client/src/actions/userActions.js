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