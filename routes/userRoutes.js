'use strict'
const express = require('express')


const employe = require('../controllers/employeController')
const router = express.Router()

// get all employees
router.get(`/api/worknest/users`, user.index)

// add a new employee
router.post(`/api/worknest/user`, user.store)

// get employee by id
router.get(`/api/worknest/user/:id`, user.show)

// update employee by id
router.put(`/api/worknest/user/:id`, user.update)

// delete employee by id
router.delete(`/api/worknest/user/:id`, user.destroy)

module.exports = router