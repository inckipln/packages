"use strict"

const {initialize}=require('./got-request.js')
const pipe = require('./lib/pipe')

const payment = (token) => {
    return Object.create({
        init: pipe(
            initialize(token)
        )
    })
}

module.exports = payment