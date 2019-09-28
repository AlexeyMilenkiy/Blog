const db = require('../models/index');
const models = db.models;
const sequelize = db.sequelize;

const searchUsers = (req, res) => {
    let desiredUser = req.body.name;
    let activeUserId = req.body.id;

    models.User.findAll({
        attributes: ['name', 'id'],
        include: [ {
            model: sequelize.Followers,
            as: 'followers',
            attributes: ['follower'],
            where: {
                follower: activeUserId
            },
            required: false,
        }],
        where: {
            name: { [sequelize.Op.iLike]: `%${desiredUser}%` },
            id: { [sequelize.Op.ne]: activeUserId },
        },
    })
        .then(users => {
            res.json(users)
        })
        .catch(() => {
            res.sendStatus(404);
        });
};

module.exports = { searchUsers };
