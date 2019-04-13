const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripe.sk);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'charge for $5 for 500 credits',
      source: req.body.id
    });

    console.log('Charge: ');
    console.log(charge);

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
