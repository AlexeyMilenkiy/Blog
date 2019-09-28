const checkHash = require('../helpers/checkHash');
const helper = require('../helpers/createToken');
const db = require('../models/index');
const models = db.models;

const loginUser = (req, res) => {
    let user = req.body;

    models.User.findOne({where: {email: user.email}})
        .then(data => {
            if(!data){
                res.status(400).send('invalid_email')
            } else {
                let isHash = checkHash(user.password, data.password);
                if (!!isHash) {
                    let activeUser = {name: data.name, id: data.id};
                    res.json([activeUser.name, activeUser.id, helper.createToken(activeUser)]);
                } else {
                    res.status(400).send('invalid_password');
                }
            }
        })
        .catch(() => {
            res.sendStatus(400);
        });
};

module.exports = {loginUser};
