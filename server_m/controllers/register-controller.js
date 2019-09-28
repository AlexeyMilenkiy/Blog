const createHash = require('../helpers/createHash');
const db = require('../models/index');
const models = db.models;

const registerUser = (req, res) => {
    let user = req.body;
    user.password = createHash(user.password);

    models.User.create({ ...user })
        .then(user => {
            res.json(user);
        })
        .catch(() => {
            res.status(400).send('email_registered');
        });
};

module.exports = { registerUser };
