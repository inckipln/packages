"use strict"

const got = require('got')

const BASE_URL = "https://paymentsandbox.asoriba.com/payment/v1.0/"

const initialize = (token) => {
    
    return (data) => {

        const client = got.extend({
            baseUrl: BASE_URL,
            json:true,
            header: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        return client.post("initialize",{body: data})
    }
}

const verify = (token) => {

    return (param) => {
        
        const client = got.extend({
            baseUrl: BASE_URL,
            header: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        console.log(client.defaults.options.headers);
        

        return client.get(`verify?transaction_uuid=${param}`)
    }
}

module.exports = {
    initialize,
    verify
}