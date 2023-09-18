const stripe = require("stripe")("pk_test_51NrYkYSFOxX2lFTHe0Qvb76KVeVrpBdpnXIhWkfjtePlrUEQo3yCsMUF4wEOUA5L64WQpxHdGtcWznCXj3rwpJBk00Tgyuv6KN");
const uuid = require("uuid").v4; 

exports.handlePayment = (req,res) => {
    const { product, token, subTotal } = req.body;
  console.log("PRODUCT ", product);
  console.log("PRICE ", subTotal);
  
  const idempontencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id
    })
    .then(customer => {
      stripe.charges.create(
        {
          amount: subTotal,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country
            }
          }
        },
        { idempontencyKey }
      );
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));

}