const db = require('../models/index');
const models = db.models;

const setSubscription = (req, res) => {
    let userId = req.body.userId;
    let followerId = req.body.followingId;

    models.Follower.create({follower: userId, following: followerId})
        .then(follow => {
            res.json(follow);
        })
        .catch(() => {
            res.sendStatus(400);
        })
};

const removeSubscription = (req, res) => {
    let followerId = req.headers.user_id;
    let followingId = req.headers.following_id;

    models.Follower.destroy(
        {where: {
            follower: followerId,
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
