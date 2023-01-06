import axios from 'axios'

export const startLoginUser =  (formData, clearAndDispatch) => {
    return (
        async () => {
            try {
                const { data } = await axios.post('http://localhost:3040/api/users/login',formData)
                if(data.hasOwnProperty('notice')){
                    alert(data.notice, 'error')
                } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                    alert(data.message, 'error')
                } else if(data.hasOwnProperty('token')){
                    alert('Login Successful', 'success')
                    localStorage.setItem('token',data.token)
                    clearAndDispatch()
                }
            } catch (error) {
                alert(error.message, 'error')
            }
        }
    )
}