'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const nock = require('nock')
const {
  checkoutRequestDetails,
  checkoutResponseDetails,
  verificationResponseDetails
} = require('./lib/mock')

chai.use(chaiAsPromised)

const expect = chai.expect

const payment = require('./index')

describe('Asoriba Payment', () => {
  const AUTH_TOKEN = 'sdadadafdf'
  const BASE_URL = 'https://paymentsandbox.asoriba.com'

  describe('Checkout', () => {
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

      it('should initialise create checkout data', () => {
        return expect(
          payment({ AUTH_TOKEN, BASE_URL }).checkout(order)
        ).eventually.eql(response)
      })
    })

    describe('Failure', () => {
      it('should throw error if auth token is not provided', () => {
        return expect(() => payment({}).checkout()).to.throw(
          'AUTH_TOKEN is required'
        )
      })
      it('should throw error if base url is not provided', () => {
        return expect(() => payment({ AUTH_TOKEN })).to.throw(
          'BASE_URL is required'
        )
      })
    })
  })

  describe('Verification', () => {
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

    describe('Success', () => {
      const verifyPaymentResponse = verificationResponseDetails()

      it('should verify payment using transaction id', () => {
        return expect(
          payment({ AUTH_TOKEN, BASE_URL }).verifyTransaction(transaction_uuid)
        ).eventually.to.eql(JSON.stringify(verifyPaymentResponse))
      })
    })

    describe('Failure', () => {
      it('should throw error if transaction id is not provided', () => {
        return expect(() =>
          payment({ AUTH_TOKEN, BASE_URL }).verifyTransaction()
        ).to.throw('transactionId is required')
      })
    })
  })
})
