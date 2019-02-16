"use strict"
const keyPublishable = "pk_test_nPY4q9EWyuNRPaOsnq4OJjy5";

const app = require("express")();

const payment = require('./index')

app.set("view engine", "pug");

app.use(require("body-parser").urlencoded({extended: false}));


const init = payment("sk_test_mt4TAqRcSd1qE4ak3J4LqdiY")

app.get("/", (req, res) =>
  res.render("index.pug", {keyPublishable}));

app.post("/charge", (req, res) => {
    let amount = 500;
    init.customer({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then( result => console.log(result)).catch(err => console.log(err))
});

app.listen(4567, function(err){
    if(err) throw err;
    console.log("App listening on port "+4567);
});

