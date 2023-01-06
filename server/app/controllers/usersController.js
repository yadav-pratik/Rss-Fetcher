const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/user')

const usersController = {}

usersController.register = async (req, res) => {
    try {
        const {email, password, name} = req.body
        const user = new User({email, password, name})
        const u = await user.save()
        res.json({
            success : 'Account Created Successfully'
        })
    } catch (error) {
        if(error.code === 11000){
            res.json({
                errors : error,
                message : 'Email address is taken. Please Enter a different one!'
            })
        } else {
            res.json(error) 
        }
    }
}

usersController.login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        if(user){   
            const match = await bcrypt.compare(password, user.password)
            if(match){
                const tokenData = {
                    _id : user._id,
                    email : user.email
                }
                const token = jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn : '7d'})
                res.json({
                    token : `Bearer ${token}`
                })
            } else {
                res.json({
                    notice : 'invalid email or password'       
                })
            }
        } else {
            res.json({
                notice : 'invalid email or password'           
            })
        }
    } catch (error) {
        res.json(error)              
    }
    
}

usersController.show = async (req, res) => {
    try {
        const user = await User.findById(req.tokenData._id, {password : 0})
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

module.exports = usersController