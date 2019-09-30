const createHash = require('../helpers/createHash');
const models = require('../models');
const User = models.User;

const registerUser = (req, res) => {
    let user = req.body;
    user.password = createHash(user.password);

    User.create({ ...user })
        .then(user => {
            res.json(user);
        })
        .catch(() => {
            res.status(400).send('email_registered');
        });
};

module.exports = { registerUser };
