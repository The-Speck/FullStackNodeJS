const passport = require("passport");

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    )

    app.get(
        '/api/logout',
        (req, res) => {
            console.log('logging out user', req.user);
            req.logout();
            res.redirect('/');
        },
    )

    app.get(
        '/api/user',
        (req, res) => {
            console.log('Sending user', req.user);
            res.send(req.user);
        }
    )
}