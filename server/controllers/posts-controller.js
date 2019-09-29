const sequelize = require('../db/sequelize');

const addPost = (req, res) => {
    let post = req.body;

    sequelize.Post.create({...post})
        .then(post => {
            res.json(post);
        })
        .catch(() => {
            res.sendStatus(400)
        })
};

const getMyPosts = (req, res) => {
    let userId = req.headers.id;
    
    sequelize.Post.findAll({where: {author_id: userId}})
        .then(posts => {
            res.json(posts);
        })
        .catch(() => {
            res.sendStatus(400)
        })
};

const getMyFriendsPosts = (req, res) => {
    let activeUserId = req.headers.id;

    sequelize.User.findAll({
        attributes: ['name'],
        include:
        [
            {
                model: sequelize.Followers,
                as: 'followers',
                attributes: [],
                where: {
                    follower: activeUserId
                },
            },
            {
                model: sequelize.Post,
                as: 'posts',
                attributes: {exclude : ['id', 'author_id']},
                where: {
                    author_id: {
                        [sequelize.Op.ne] : activeUserId
                    }
                }
            }
        ],
    })
        .then(posts => {
            res.json(posts);
        })
        .catch(() => {
            res.sendStatus(400)
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
