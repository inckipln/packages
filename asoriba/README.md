# Asoriba Payment Platform

This is a node wrapper of the asoriba payment platform. It allows for initializing payment or creating the asoriba checkout page

# Installation

`npm i asoriba-payment`

# Checkout Page
This section shows how to create a checkout page with asoriba's payment api



|  FIELD  |  DESCRIPTION | REQUIRED | DATA TYPE |
| --------   |    -------------------- | ---------        |    ------------    |
| AUTH_TOKEN     |   Authentication token required to make a succesful call to the asoriba api |  true        |  string |
| BASE_URL     |  Base url for the http asoriba api. It could be that of the live api or the stage api  |  true        |  string  |
| PAYMENT DETAILS      |  Contains the details of the payment or order  |  true        |  object  |


## Initialize Payment / Checkout 

``` javascript
const payment = require ('asoriba-payment')

const AUTH_TOKEN = "dsdfsdfsdfdfsfsf"
const BASE_URL = "https://paymentsandbox.asoriba.com"

const orderDetails = {
  amount: 1.0,
  metadata: {
    order_id: 9800,
    product_name: 'Title of product/service/donation',
    product_description: 'Description of product/service/donation'
  },
  callback: 'https://435c02e7.ngrok.io/kipln/callback',
  post_url: 'https://435c02e7.ngrok.io/kipln',
  pub_key: 'sdfdsfsfs',
  order_image_url:
    'https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png',
  first_name: 'John',
  last_name: 'Doe',
  email: 'sample@domain.com',
  tokenize: false
}

payment({ AUTH_TOKEN, BASE_URL })
  .checkout(orderDetails)
  .then(data => console.log(data))
  .catch(err => console.log(err))



`Result`

{ id: '5045c6d758a49f',
  url: 'https://paymentsandbox.asoriba.com/payment/v1.0/checkout/new?id=5045c6d758a49f',
  status_code: '100',
  status: 'success' }
```


# Payment Verification
Once payment has been made, you can go ahead and verify the status of the payment.


|  FIELD  |  DESCRIPTION | REQUIRED | DATA TYPE |
| --------   |    -------------------- | ---------        |    ------------    |
| AUTH_TOKEN     |   Authentication token required to make a succesful call to the asoriba api |  true        |  string |
| BASE_URL     |  Base url for the http asoriba api. It could be that of the live api or the stage api  |  true        |  string  |
| TRANSACTION ID      |  Transaction id provided after successfully making a payment  |  true        |  string  |



## Verification

```javascript

const AUTH_TOKEN = 'dsdfsdfsdfdfsfsf'

const BASE_URL = 'https://paymentsandbox.asoriba.com'

const TRANSACTION_ID = 'a5b4d7e6fe71e2b4e8cba92ce712ae'

payment({ AUTH_TOKEN, BASE_URL })
  .verifyTransaction(TRANSACTION_ID)
  .then(body => console.log(JSON.parse(body)))
  .catch(err => console.log(err))


`Result`

{ amount: 1,
  metadata: 
   { order_id: 9800,
     product_name: 'STRAWBERRY',
     product_description: 'Description of product/service/donation' },
  currency: 'GHS',
  amount_after_charge: '0.97',
  reference: '556483716525624002',
  processor_transaction_id: '556483716525624002',
  charge: '0.03',
  source: { object: 'card', reference: '1556713769', type: 'Visa' },
  tokenized: false,
  status: 'successful',
  status_code: '100',
  transaction_uuid: 'a5b4d7e6fe71e2b4e8cba92ce712ae',
  payment_date: '2019-04-28T20:35:17Z',
  message: 'Successful transaction.',
  error_fields: [] }
```

Click [here](https://documenter.getpostman.com/view/121946/RWEgrJsA?version=latest#intro) to view Asoriba payment api documentation
