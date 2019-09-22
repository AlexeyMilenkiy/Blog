const bcrypt = require('bcrypt');

module.exports = (pass, hash) => {
    return bcrypt.compareSync (pass, hash);
};

