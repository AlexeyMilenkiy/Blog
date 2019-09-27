const sequelize = require('../db/sequelize');

const searchUsers = (req, res) => {
    let desiredUser = req.body.name;
    let activeUserId = req.body.id;

    sequelize.User.findAll({
        attributes: ['name', 'id'],
        include: [ {
            model: sequelize.Followers,
            as: 'followers',
            attributes: ['id','follower'],
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
        .catch((err) => {
            console.log(err);
            res.sendStatus(404);
        });
};


module.exports = { searchUsers };
