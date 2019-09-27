const sequelize = require('../db/sequelize');

const setSubscription = (req, res) => {
    let userId = req.body.userId;
    let followerId = req.body.followerId;

    sequelize.Followers.create({follower: userId, following: followerId})
        .then(follow => {
            res.json(follow);
        })
        .catch(() => {
            res.sendStatus(400);
        })
};

const removeSubscription = (req, res) => {
    let followerId = req.headers.userId;
    let followingId = req.headers.followingId;

    sequelize.Followers.destroy(
        {where:
                {follower: followerId,
                following: followingId}
        })
        .then(follow => {
            res.json(follow);
        })
        .catch(() => {
            res.sendStatus(400);
        })
};

module.exports = {setSubscription, removeSubscription};
