const jwt = require('jsonwebtoken');
const helper = require('./createToken');

const checkToken = (req, res, next) => {
    let secretKey = helper.privateKey;
    let token = req.headers.authorization || req.cookies.authToken;

    jwt.verify(token, secretKey, (err, decoded) => {

        if(decoded && dashboard) {
            res.sendStatus(200);
        } else if(decoded) {
            next();
        } else {
            res.sendStatus(401);
        }
    });
};

module.exports = checkToken;
