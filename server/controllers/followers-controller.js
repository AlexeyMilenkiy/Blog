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
    console.log('===================',req)
    // let userId = req.body.userId;
    // let followerId = req.body.followerId;

    // sequelize.Followers.create({follower: userId, following: followerId})
    //     .then(follow => {
    //         res.json(follow);
    //     })
    //     .catch(() => {
    //         res.sendStatus(400);
    //     })
};

module.exports = {setSubscription, removeSubscription};
