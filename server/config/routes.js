const express = require('express')

const authenticateUser = require('../app/middlewares/authentication')

const usersController = require('../app/controllers/usersController')
const articlesController = require('../app/controllers/articlesController')

const router = express.Router()

//user APIs

router.post('/api/users/register', usersController.register)
router.post('/api/users/login',usersController.login)
router.get('/api/users/account', authenticateUser, usersController.show)

//articles API

router.get('/api/articles/list', articlesController.list)

module.exports = router