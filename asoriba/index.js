"use strict"

const {initialize}=require('./got-request.js')
const pipe = require('./lib/pipe')

const getResponseBody = res => res.body

const throwError = err => {throw err.body}


const payment = (token) => {
    return Object.create({
        checkout: (options) =>pipe(
            initialize(token),
            getResponseBody
        )(options).catch(throwError)
    })
}

module.exports = payment