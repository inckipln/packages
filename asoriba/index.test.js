"use strict"

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var expect = chai.expect;


const payment = require('./index')

describe("Asoriba Payment", ()=>{

    describe("Success", () => {

        const AUTH_TOKEN="K_iTUWzcQqUXGH9ZbDxIg1NhLZCZ0VrUdw___FAPK5jXkG1B1SaN-qrnwKvI"
        
        const options = {
            amount:1.0,
            metadata: {
                order_id:9800,
                product_name:"Title of product/service/donation",
                product_description:"Description of product/service/donation"
            },
            callback:"https:localhost/",
            post_url:"https://webhook.site/a12caedb-a3b3-46e6-b5d8-8f784da17a33",
            pub_key:"fIJEQUisXb2J-Fa5vZbuS5PNtUqJE4z8X-rov-BEF_JKu7braDb06nNHErQQ",
            order_image_url:"https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png",
            first_name:"John",
            last_name:"Doe",
            email:"sample@domain.com",
            tokenize:false,
            payment_token:"token of a previously saved card",
            phone_number:""
        } 

        it('should initialise payment', () => {

            return expect(payment(AUTH_TOKEN).init(
                options
            )).eventually.fulfilled
        })
    })
})