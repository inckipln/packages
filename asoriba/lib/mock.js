'use strict'

const checkoutRequestDetails = _ =>
  Object.assign(
    {},
    {
      amount: 1.0,
      metadata: {
        order_id: 9800,
        product_name: 'Title of product/service/donation',
        product_description: 'Description of product/service/donation'
      },
      callback: 'https:localhost/',
      post_url: 'https://webhook.site/a12caedb-a3b3-46e6-b5d8-8f784da17a33',
      pub_key: 'dsfadfadfaffsdfd',
      order_image_url:
        'https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png',
      first_name: 'John',
      last_name: 'Doe',
      email: 'sample@domain.com',
      tokenize: false,
      payment_token: 'token of a previously saved card',
      phone_number: ''
    }
  )

const checkoutResponseDetails = _ =>
  Object.assign(
    {},
    {
      id: '8da75c60336545',
      url:
        'https://paymentsandbox.asoriba.com/payment/v1.0/checkout/new?id=8da75c60336545',
      status_code: '100',
      status: 'success'
    }
  )

const verificationResponseDetails = _ =>
  Object.assign(
    {},
    {
      amount: 1.0,
      metadata: {
        order_id: 9800,
        product_name: 'STRAWBERRY',
        product_description: 'Description of product/service/donation'
      },
      currency: 'GHS',
      amount_after_charge: '0.97',
      reference: '5564837165256224804002',
      processor_transaction_id: '5564837165256224804002',
      charge: '0.03',
      source: {
        object: 'card',
        reference: '1556483713769',
        type: 'Visa'
      },
      tokenized: false,
      status: 'successful',
      status_code: '100',
      transaction_uuid: 'a5b4d7e6fe71e2b4e8cba92ce7db12ae',
      payment_date: '2019-04-28T20:35:17Z',
      message: 'Successful transaction.',
      error_fields: []
    }
  )

module.exports = {
  checkoutRequestDetails,
  checkoutResponseDetails,
  verificationResponseDetails
}
