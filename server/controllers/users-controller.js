const sequelize = require('../db/sequelize');

const searchUsers = (req, res) => {
    let desiredUser = req.body.name;
    let activeUserId = req.body.id;

    sequelize.User.findAll({
        attributes: ['name', 'id'],
        include: [ {
            model: sequelize.Followers,
            as: 'follower',
            attributes: ['id'],
        } ],
        where: {
            name: { [sequelize.Op.iLike]: `%${desiredUser}%` },
            id: { [sequelize.Op.ne]: activeUserId },
        },
        raw: true,
    })

    // sequelize.User.findAll({
    //     where: {
    //         name: {
    //             [sequelize.Op.iLike]: `%${desiredUser}%`,
    //         },
    //         id : {
    //             [sequelize.Op.ne]: activeUserId
    //         },
    //     },
    //     attributes: { exclude: ['password', 'email'] },
    //     include: [{
    //         model: sequelize.Followers,
    //         attributes: ['id', 'follower', 'following'],
    //         required: false,
    //     }],
    //     })
        .then(users => {
            res.json(users)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(404);
        });
};


module.exports = { searchUsers };
