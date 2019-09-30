const db = require('../models/index');
const models = require('../models');
const User = models.User;
const Follower = models.Follower;
const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

const searchUsers = (req, res) => {
    let desiredUser = req.body.name;
    let activeUserId = req.body.id;

    User.findAll({
        attributes: ['name', 'id'],
        include: [ {
            model: Follower,
            attributes: ['follower'],
            as: 'followers',
            where: {
                follower: activeUserId
            },
            required: false,
        }],
        where: {
            name: { [Op.iLike]: `%${desiredUser}%` },
            id: { [Op.ne]: activeUserId },
        },
    })
        .then(users => {
            res.json(users)
        })
        .catch((err) => {
            res.sendStatus(404);
        });
};

module.exports = { searchUsers };
