# Asoriba Payment Platform

This is a node wrapper of the asoriba payment platform. It allows for initializing payment or creating the asoriba checkout page

# Installation

`npm i asoriba-payament`

# Run

### Initialize Payment / Checkout 

``` javascript
const payment = require ('asoriba-payament')

const AUTH_TOKEN = "dsdfsdfsdfdfsfsf"

const options = {
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


payment(AUTH_TOKEN).init(
    options
).then(data => console.log(data.body)).catch(err => console.log(err.body))

`Result`

{ id: '5045c6d758a49f',
  url: 'https://paymentsandbox.asoriba.com/payment/v1.0/checkout/new?id=5045c6d758a49f',
  status_code: '100',
  status: 'success' }
```


