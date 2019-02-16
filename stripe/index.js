"use strict"

const stripe = require('stripe')
const pipe = require ('./lib/pipe')

const init = (credentials) => {
    
    return Object.create({
        charge: (options)=> {

            pipe(
                console.log,
                stripe(credentials).charges.create
            )(options)},
        customer: (options) => {
            const payment = stripe(credentials)
            const {customers} = payment
            return customers.create(options)
    }
})
}

module.exports = init