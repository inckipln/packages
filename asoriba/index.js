"use strict"

const {initialize}=require('./got-request.js')
const pipe = require('./lib/pipe')
const required = require('./lib/required')

const getResponseBody = res => res.body

const throwError = err => {throw err.body}


const payment = (token = required('token') ) => {
    return Object.create({
        checkout: ( paymentDetails = required ('payment details')) =>pipe(
            initialize(token),
            getResponseBody
        )(paymentDetails).catch(throwError)
    })
}

module.exports = payment