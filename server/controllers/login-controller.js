const checkHash = require('../helpers/checkHash');
const helper = require('../helpers/createToken');
const models = require('../models');
const User = models.User;

const loginUser = (req, res) => {
    let user = req.body;

    User.findOne({where: {email: user.email}})
        .then(data => {
            if(!data){
                res.status(401).send('invalid_email')
            } else {
                let isHash = checkHash(user.password, data.password);
                if (!!isHash) {
                    let activeUser = {name: data.name, id: data.id};
                    res.json([activeUser.name, activeUser.id, helper.createToken(activeUser)]);
                } else {
                    res.status(401).send('invalid_password');
                }
            }
        })
        .catch(() => {
            res.sendStatus(401);
        });
};

module.exports = {loginUser};
