"use strict"

const payment = require ('./asoriba')

const AUTH_TOKEN = "K_iTUWzcQqUXGH9ZbDxIg1NhLZCZ0VrUdw___FAPK5jXkG1B1SaN-qrnwKvI"

const options = {
    amount:1.0,
    metadata: {
        order_id:9800,
        product_name:"Title of product/service/donation",
        product_description:"Description of product/service/donation"
    },
    callback:"https://435c02e7.ngrok.io/kipln/callback",
    post_url:"https://435c02e7.ngrok.io/kipln",
    pub_key:"fIJEQUisXb2J-Fa5vZbuS5PNtUqJE4z8X-rov-BEF_JKu7braDb06nNHErQQ",
    order_image_url:"https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png",
    first_name:"John",
    last_name:"Doe",
    email:"sample@domain.com",
    tokenize:false,
}

payment(AUTH_TOKEN).init(
    options
).then(data => console.log(data.body)).catch(err => console.log(err.body))