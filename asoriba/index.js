"use strict"

const {initialize}=require('./got-request.js')
const pipe = require('./lib/pipe')
const required = require('./lib/required')

const getResponseBody = res => res.body

const throwError = err => {throw err.body}


const payment = ({AUTH_TOKEN = required('Authentication token'), BASE_URL = required ('Base url')} ) => {
    return Object.create({
        checkout: ( paymentDetails = required ('payment details')) =>pipe(
            initialize({AUTH_TOKEN, BASE_URL}),
            getResponseBody
        )(paymentDetails).catch(throwError)
    })
}

module.exports = payment