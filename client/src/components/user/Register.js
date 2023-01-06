import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import isEmail from 'validator/lib/isEmail'



const Register = (props) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const dispatch = useDispatch()
    
    const validationStyle = {color : 'red'}

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'fullName'){
            setFullName(e.target.value)
        } else if(name === 'email'){
            setEmail(e.target.value.trim())
        }  else if(name === 'password'){
            setPassword(e.target.value.trim())
        }
    }

    const runValidations = () => {
        //fullName validations
        if(fullName.length === 0){
            errors.fullName = 'Name cannot be empty'
        } else if(!fullName.trim().includes(' ')){
            errors.fullName = 'You should enter your Full Name'
        }

        //email validations
        if(email.length === 0){
            errors.email = 'Email cannot be empty'
        } else if(!isEmail(email)){
            errors.email = 'Invalid Email Format'
        }

        //password validations
        if(password.length === 0){
            errors.password = 'Password cannot be empty'
        } else if(password.length < 8 || password.length >128){
            errors.password = 'Password should be between 8 and 128 characters'
        } else if(email.includes('!') || email.includes('*') || email.includes('$') || email.includes('%')){
            errors.email = 'Email cannot contain special characters'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        runValidations()
        
        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const clearAndDispatch = () => {
                setFullName('')
                setEmail('')
                setPassword('')
            }

            const formData = {
                email, password , name : fullName.trim()
            } 

            // dispatch(startLoginUser(formData, clearAndDispatch))
            
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Full Name</label> 
                <br/>
                <input 
                    className="form-control"
                    type="text" 
                    value={fullName} 
                    onChange={handleChange}
                    name="fullName"
                />
                {formErrors.fullName ? <p style={validationStyle}>{formErrors.fullName}</p> : <br/>}
                <label>Enter an Email</label> 
                <br/>
                <input 
                    className="form-control"
                    type="text" 
                    value={email} 
                    onChange={handleChange}
                    name="email"
                />
                {formErrors.email ? <p style={validationStyle}>{formErrors.email}</p> : <br/>}
                <label>Enter a Password</label> 
                <br/>
                <input 
                    className="form-control"
                    type="password" 
                    value={password} 
                    onChange={handleChange}
                    name="password"
                />
                {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <br/>}
                <input className="btn btn-primary" type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default Register