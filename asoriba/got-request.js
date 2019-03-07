"use strict"

const got = require('got')


const initialize = ({AUTH_TOKEN, BASE_URL}) => {
    
    return (data) => {
        const client = got.extend({
            baseUrl: `${BASE_URL}/payment/v1.0/`,
            json:true,
            header: {
                "Content-Type": "application/json",
                "Authorization": AUTH_TOKEN
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