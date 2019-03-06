const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClient.client_id,
            clientSecret: keys.googleClient.client_secret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("checking user profile id in the db", profile);
            User.findOne({
                googleId: profile.id
            }).then((exisitingUser) => {
                if (exisitingUser) {
                    console.log("found user", exisitingUser);
                    done(null, exisitingUser);
                } else {
                    console.log("creating user with profile id", profile.id);
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);