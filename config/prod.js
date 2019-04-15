const uuid = require('uuid/v4');
// prod
module.exports = {
  googleClient: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [process.env.GOOGLE_AUTH_URI]
  },
  session: {
    cookieKey: (uuid() + uuid()).replace(/-/g, '')
  },
  mongo: {
    mongoURI: process.env.MONGO_URI
  },
  stripe: {
    pk: process.env.STRIPE_PK,
    sk: process.env.STRIPE_SK
  },
  sendGridKey: process.env.SEND_GRID_KEY
};
