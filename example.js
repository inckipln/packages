"use strict"

const payment = require ('./asoriba')

const AUTH_TOKEN = "K_iTUWzcQqUXGH9ZbDxIg1NhLZCZ0VrUdw___FAPK5jXkG1B1SaN-qrnwKvI"

const BASE_URL = "https://paymentsandbox.asoriba.com"
 
const options = {
    amount:1.0,
    metadata: {
        order_id:9800,
        product_name:"STRAWBERRY",
        product_description:"Description of product/service/donation"
    },
    pub_key:"K_iTUWzcQqUXGH9ZbDxIg1NhLZCZ0VrUdw___FAPK5jXkG1B1SaN-qrnwKvI",
    order_image_url:"https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png",
    first_name:"Nayram",
    last_name:"Mensah",
    email:"naa@domain.com",
    tokenize:false,
}
 
 
payment({AUTH_TOKEN,BASE_URL}).verifyTransaction(
    "a5b4d7e6fe71e2b4e8cba92ce7db12ae"
).then(body => console.log(body)).catch(err => console.log(err))
