const db = require('../models/index');
const models = db.models;
const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

const searchUsers = (req, res) => {
    let desiredUser = req.body.name;
    let activeUserId = req.body.id;

    models.User.findAll({
        attributes: ['name', 'id'],
        include: [ {
            model: models.Follower,
            as: 'follower',
            attributes: ['follower'],
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
            console.log(err);
            res.sendStatus(404);
        });
};

module.exports = { searchUsers };
