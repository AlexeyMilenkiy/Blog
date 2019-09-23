const sequelize = require('../db/sequelize');

const searchUsers = (req, res) => {
    let desiredUser = req.body.user;
    let activeUserId = req.body.id;

    sequelize.User.findAll({
        attributes: ['id', 'name'],
        where: {
            name: {
                [sequelize.Op.iLike]: `%${desiredUser}%`,
            },
            id : {
                [sequelize.Op.ne]: activeUserId
            },
        }})
        .then(users => {
            res.json(users)
        })
        .catch(() => {
            res.sendStatus(404);
        });
};


module.exports = { searchUsers };
