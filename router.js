const router = require('express').Router()
const controller = require('./app/controllers')
router.get('/', controller.home )