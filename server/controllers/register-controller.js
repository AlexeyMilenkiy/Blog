const createHash = require('../helpers/createHash');
const sequelize = require('../db/sequelize');

const registerUser = (req, res) => {
    let user = req.body;
    user.password = createHash(user.password);

    sequelize.User.create({ email: user.email, name: user.name, password: user.password })
        .then(user => {
            res.json(user);
        })
        .catch(() => {
            res.status(400).send('validation_error');
        });
};

module.exports = { registerUser };
