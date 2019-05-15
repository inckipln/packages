'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const nock = require('nock')
const { initialize, verify } = require('./got-request')
const {
  checkoutRequestDetails,
  checkoutResponseDetails,
  verificationResponseDetails
} = require('./lib/mock')

chai.use(chaiAsPromised)

const expect = chai.expect
const AUTH_TOKEN = 'adafdfafafdffd'
const BASE_URL = 'https://paymentsandbox.asoriba.com'

describe('Got Request', () => {
  describe('Initialize', () => {
    describe('Success', () => {
      const order = checkoutRequestDetails()
      const response = checkoutResponseDetails()

      before(() => {
        nock(`${BASE_URL}/payment/v1.0`, {
          reqheaders: {
            authorization: AUTH_TOKEN
          }
        })
          .post('/initialize')
          .reply(200, response)
      })

      after(() => {
        nock.cleanAll()
      })

      it('should initialise payment successfully', async () => {
        const checkout = initialize({ AUTH_TOKEN, BASE_URL })
        const result = await checkout(order)
        expect(result.body).to.eql(response)
      })
    })

    describe('Failure', () => {
      const order = checkoutRequestDetails()

      it('show throw error if auth token is not provided', () => {
        return expect(() => initialize({})).to.throw('AUTH_TOKEN is required')
      })

      it('should throw error if base uurl is not provided', () => {
        return expect(() => initialize({ AUTH_TOKEN })).to.throw(
          'BASE_URL is required'
        )
      })
    })
  })

  describe('Verify Payment', () => {
    describe('Success', () => {
      const transaction_uuid = '435989caaa8cd309117eb39b4c26ca84'

      const verifyPaymentResponse = verificationResponseDetails()

      before(() => {
        nock(`${BASE_URL}/payment/v1.0`, {
          reqheaders: {
            authorization: `Bearer ${AUTH_TOKEN}`
          }
        })
          .get(`/verify?transaction_uuid=${transaction_uuid}`)
          .reply(200, verifyPaymentResponse)
      })

      after(() => {
        nock.cleanAll()
      })

      it('should verify payment successfully', async () => {
        const got = verify({ AUTH_TOKEN, BASE_URL })
        const response = await got(transaction_uuid)
        expect(JSON.parse(response.body)).to.eql(verifyPaymentResponse)
      })
    })
  })
})
