const uuid = require('uuid/v4')
// prod
module.exports = {
    "googleClient": {
        "client_id": process.env.GOOGLE_CLIENT_ID,
        "client_secret": process.env.GOOGLE_CLIENT_SECRET,
        "redirect_uris": [process.env.GOOGLE_AUTH_URI],
    },
    "session": {
        "cookieKey": uuid()
    },
    "mongo": {
        "user": process.env.MONGO_USER,
        "pw": process.env.MONGO_USER_PASS,
        "mongoURI": process.env.MONGO_URI
    }
};