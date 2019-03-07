# Asoriba Payment Platform

This is a node wrapper of the asoriba payment platform. It allows for initializing payment or creating the asoriba checkout page

# Installation

`npm i asoriba-payment`



# Payment Fields

|  FIELD  |  DESCRIPTION | REQUIRED | DATA TYPE |
| --------   |    -------------------- | ---------        |    ------------    |
| AUTH_TOKEN     |   Authentication token required to make a succesful call to the asoriba api |  true        |  string |
| BASE_URL     |  Base url for the http asoriba api. It could be that of the live api or the stage api  |  true        |  string  |
| PAYMENT DETAILS      |  Contains the details of the payment or order  |  true        |  object  |

# Run
### Initialize Payment / Checkout 

``` javascript
const payment = require ('asoriba-payment')

const AUTH_TOKEN = "dsdfsdfsdfdfsfsf"
const BASE_URL = "https://paymentsandbox.asoriba.com"

const paymentDetails = {
    amount:1.0,
    metadata: {
        order_id:9800,
        product_name:"Title of product/service/donation",
        product_description:"Description of product/service/donation"
    },
    callback:"https://435c02e7.ngrok.io/kipln/callback",
    post_url:"https://435c02e7.ngrok.io/kipln",
    pub_key:"sdfdsfsfs",
    order_image_url:"https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png",
    first_name:"John",
    last_name:"Doe",
    email:"sample@domain.com",
    tokenize:false,
}


payment({
            AUTH_TOKEN,
            BASE_URL
        }).checkout(
    paymentDetails
).then(data => console.log(data)).catch(err => console.log(err))

`Result`

{ id: '5045c6d758a49f',
  url: 'https://paymentsandbox.asoriba.com/payment/v1.0/checkout/new?id=5045c6d758a49f',
  status_code: '100',
  status: 'success' }
```


