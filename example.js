"use strict"

const payment = require ('./asoriba')

const AUTH_TOKEN = "hkhgkhjhgjkhg"

const BASE_URL = "https://paymentsandbox.asoriba.com"
 
const options = {
    amount:1.0,
    metadata: {
        order_id:9800,
        product_name:"VANILLA",
        product_description:"Description of product/service/donation"
    },
    callback:"https://435c02e7.ngrok.io/kipln/callback",
    post_url:"https://435c02e7.ngrok.io/kipln",
    pub_key:"khgjhgkghvhjgfgh",
    order_image_url:"https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png",
    first_name:"Nayram",
    last_name:"Mensah",
    email:"naa@domain.com",
    tokenize:true,
}
 
 
payment({AUTH_TOKEN,BASE_URL}).checkout(
    options
).then(body => console.log(body)).catch(err => console.log(err))
