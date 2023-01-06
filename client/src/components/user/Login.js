import React, { useState } from "react"
import { useDispatch } from "react-redux"
import isEmail from 'validator/lib/isEmail'

import { toggleIsLogged } from "../../actions/isLoggedActions"
import { doLoginToggle } from "../../actions/loginToggleActions"
import { startLoginUser } from "../../actions/userActions"

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const validationStyle = {color : 'red'}

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'email'){
            setEmail(e.target.value.trim())
        } else if(name === 'password'){
            setPassword(e.target.value.trim())
        }
    }

    const runValidations = () => {
        //email validations
        if(email.length === 0){
            errors.email = 'Email cannot be empty'
        } else if(!isEmail(email)){
            errors.email = 'Invalid Email Format'
        } else if(email.includes('!') || email.includes('*') || email.includes('$') || email.includes('%')){
            errors.email = 'Email cannot contain special characters'
        }

        //password validations
        if(password.trim().length === 0){
            errors.password = 'Password cannot be empty'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const clearAndDispatch = () => {
                setEmail('')
                setPassword('')
                dispatch(doLoginToggle())
                dispatch(toggleIsLogged())
            }

            const formData = {
                email, password
            }
            
            dispatch(startLoginUser(formData, clearAndDispatch))

        } else {
            setFormErrors(errors)
        }
    }
    return (
        <div>
             <form className="mt-3" onSubmit={handleSubmit}>
                    <label>Enter Your Email</label> 
                    <br/>
                    <input
                        className="form-control" 
                        type="text" 
                        value={email} 
                        onChange={handleChange}
                        name="email"
                    />
                    {formErrors.email ? <p style={validationStyle}>{formErrors.email}</p> : <br/>}
                    <label>Enter Your Password</label> 
                    <br/>
                    <input 
                        className="form-control"
                        type="password" 
                        value={password} 
                        onChange={handleChange}
                        name="password"
                    />
                    {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <br/>}
                    <input className="btn btn-primary" type='submit' value="Login" />
                </form>
                <p 
                    className="mt-2" 
                    style={{textAlign : 'center'}}
                >New Here ? <button
                                className="btn btn-outline-primary"
                                onClick={()=>{}}
                            >Register first!
                            </button>
                </p>
        </div>
    )
}

export default Login