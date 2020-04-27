const jwt = require('jsonwebtoken');
const secrets = require('./secrets');

module.exports = (req, res, next) => {
    const secret = secrets.jwtSecret;
    // check the Authorization header for token
    const token = req.headers.authorization;

    if(token){
        // verify that the token is valid
        jwt.verify(token, secret, (error, decodedToken) => {
            // make sure there's no error
            if(error) {
                res.status(401).json({ message: "Access denied" })
            } else {
                // make the decoded token available 
                // on the req object while we're here
                req.decodedToken = decodedToken;
                
                next();
            }
        })
    } else {
        // if no token
        res.status(401).json({ message: "Please provide your credentials" })
    }
}