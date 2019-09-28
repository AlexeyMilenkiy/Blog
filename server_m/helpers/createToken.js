const jwt = require('jsonwebtoken');
const privateKey = 'privateKey';

const createToken = (activeUser) => {
    const exp = Math.floor(Date.now() / 1000) + (60 * 60);

    return {
        token: jwt.sign({exp, ...activeUser}, privateKey),
        expiresIn: exp
    }
};

module.exports = { createToken, privateKey };
