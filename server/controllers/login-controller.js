const checkHash = require('../helpers/checkHash');
const helper = require('../helpers/createToken');
const sequelize = require('../db/sequelize');

const loginUser = (req, res) => {
    let user = req.body;

    sequelize.User.findOne({where: {email: user.email}})
        .then(res => {
            let isHash = checkHash(user.password, res.password);
            if (!!isHash) {
                let activeUser = {name: res.name, id: res.id};
                console.log(helper.createToken(activeUser))
                return [activeUser.name, activeUser.id, helper.createToken(activeUser)];
            } else {
                return false
            }
        })
        .then((token) => {
            if(!token){
             res.sendStatus(400);
            } else {
             res.json(token);
            }
        })
        .catch(() => {
            res.sendStatus(400);
        });
};

module.exports = {loginUser};
