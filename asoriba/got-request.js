'use strict'

const got = require('got')
const required = require('./lib/required')

const initialize = ({
  AUTH_TOKEN = required('AUTH_TOKEN'),
  BASE_URL = required('BASE_URL')
}) => {
  return data => {
    return got.post(`${BASE_URL}/payment/v1.0/initialize`, {
      body: data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN
      },
      json: true
    })
  }
}

const verify = ({
  AUTH_TOKEN = required('AUTH_TOKEN'),
  BASE_URL = required('BASE_URL')
}) => {
  return (transaction_uuid = required('transaction_uuid')) => {
    return got.get(`${BASE_URL}/payment/v1.0/verify`, {
      query: {
        transaction_uuid
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
  }
}

module.exports = {
  initialize,
  verify
}
