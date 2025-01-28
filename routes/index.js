'use strict'
const express = require('express')
const router = express()

router.get(`/api/worknest/`, (_req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Welcome to WorkNest Employee Management System API"
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
})

module.exports = router