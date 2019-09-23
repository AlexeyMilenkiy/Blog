const createHash = require('../helpers/createHash');
const sequelize = require('../db/sequelize');

const registerUser = (req, res) => {
    let user = req.body;
    user.password = createHash(user.password);

    sequelize.User.create({ ...user })
        .then(user => {
            res.json(user);
        })
        .catch(() => {
            res.status(400).send('email_registered');
        });
};

module.exports = { registerUser };
