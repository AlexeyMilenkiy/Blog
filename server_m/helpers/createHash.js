const bcrypt = require('bcrypt');
const salt =  10;

module.exports = (pass) => {
    return bcrypt.hashSync (pass, salt);
};

 