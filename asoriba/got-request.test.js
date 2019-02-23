"use strict"

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised")
const {initialize, verify} = require('./got-request')

chai.use(chaiAsPromised);

const expect = chai.expect;
const AUTH_TOKEN= "adafdfafafdffd"

describe("Got Request",()=>{

    describe ("Initialize", () => {

        describe("Success", () => {

            const options = {
                amount:1.0,
                metadata: {
                    order_id:9800,
                    product_name:"Title of product/service/donation",
                    product_description:"Description of product/service/donation"
                },
                callback:"https:localhost/",
                post_url:"https://webhook.site/a12caedb-a3b3-46e6-b5d8-8f784da17a33",
                pub_key:"sdfadfadfdfadfafadf",
                order_image_url:"https://payment.asoriba.com/assets/asoribalogo-3d4540003815aee230ca676138579ed495cfa975270fe2d7e656292c4508d472.png",
                first_name:"John",
                last_name:"Doe",
                email:"sample@domain.com",
                tokenize:false
            }
    
            /*before ( () => {
                nock(BASE_URL, function(reqheaders){
                    console.log('request headers',reqheaders);
                    
                }).post('initialize', function (...args) {
                    console.log(args)
                }).reply(200)
            })
    
            after (()=>{
                nock.cleanAll()
            })*/
    
            it ('should initialise payment successfully', ()=>{
                const got = initialize(AUTH_TOKEN)
    
                return expect(got(options)).eventually.fulfilled
            })
        })
    })
    

    describe.only("Verify Payment", () => {
        
        describe("Success", () => {

            const transaction_uuid = "435989caaa8cd309117eb39b4c26ca84"
            

            it ('should verify payment successfully', () => {
                const got = verify(AUTH_TOKEN)

                return expect(got(transaction_uuid)).eventually.fulfilled
            })
        })
    })
})