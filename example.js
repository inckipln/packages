'use strict'

const payment = require('./asoriba')

const AUTH_TOKEN =
  'K_iTUWzcQqUXGH9ZbDxIg1NhLZCZ0VrUdw___FAPK5jXkG1B1SaN-qrnwKvI'

const BASE_URL = 'https://paymentsandbox.asoriba.com'

payment({ AUTH_TOKEN, BASE_URL })
  .verifyTransaction('a5b4d7e6fe71e2b4e8cba92ce7db12ae')
  .then(body => console.log(JSON.parse(body)))
  .catch(err => console.log(err))

