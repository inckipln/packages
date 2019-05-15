'use strict'

const { initialize, verify } = require('./got-request.js')
const pipe = require('./lib/pipe')
const required = require('./lib/required')

const getResponseBody = res => res.body

const throwError = err => {
  throw err.body
}

const payment = ({
  AUTH_TOKEN = required('AUTH_TOKEN'),
  BASE_URL = required('BASE_URL')
}) => {
  return Object.create({
    checkout: (paymentDetails = required('paymentDetails')) =>
      pipe(
        initialize({ AUTH_TOKEN, BASE_URL }),
        getResponseBody
      )(paymentDetails).catch(throwError),
    verifyTransaction: (transaction_id = required('transactionId')) =>
      pipe(
        verify({ AUTH_TOKEN, BASE_URL }),
        getResponseBody
      )(transaction_id).catch(throwError)
  })
}

module.exports = payment
