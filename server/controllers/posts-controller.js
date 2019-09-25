const sequelize = require('../db/sequelize');

const addPost = (req, res) => {
    let post = req.body;

    sequelize.Post.create({...post})
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            res.json(err)
        })
};

const getMyPosts = (req, res) => {
    let userId = req.headers.id;

    sequelize.Post.findAll({where: {author_id: userId}})
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.json(err)
        })
};

const getMyFriendsPosts = (req, res) => {
    let userId = req.headers.id;

    sequelize.Post.findAll({
        where: { author_id : {
            [sequelize.Op.ne]: userId }
            },
        include: [{
            model: sequelize.User,
            attributes: { exclude: ['password', 'email'] },
            include: [{
                model: sequelize.Followers,
                as: 'follower',
                attributes: { exclude: ['id'] },
            }]
        }]
    })
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.json(err)
        })
};

const getPosts = (req, res) => {
    if(req.headers.all) {
        getMyFriendsPosts(req, res);
    } else {
        getMyPosts(req, res);
    }
};
module.exports = { addPost, getPosts };
