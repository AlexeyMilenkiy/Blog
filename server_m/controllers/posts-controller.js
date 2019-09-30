const db = require('../models/index');
const models = require('../models');
const User = models.User;
const Post = models.Post;
const Follower = models.Follower;
const Op = db.Sequelize.Op;

const addPost = (req, res) => {
    let post = req.body;

   Post.create({...post})
        .then(post => {
            res.json(post);
        })
        .catch(() => {
            res.sendStatus(400)
        })
};

const getMyPosts = (req, res) => {
    let userId = req.headers.id;

    Post.findAll({where: {author_id: userId}})
        .then(posts => {
            res.json(posts);
        })
        .catch(() => {
            res.sendStatus(400)
        })
};

const getMyFriendsPosts = (req, res) => {
    let activeUserId = req.headers.id;

    User.findAll({
        attributes: ['name'],
        include:
        [
            {
                model: Follower,
                as: 'followers',
                attributes: [],
                where: {
                    follower: activeUserId
                },
            },
            {
                model: Post,
                as: 'posts',
                attributes: {exclude : ['id', 'author_id']},
                where: {
                    author_id: {
                        [Op.ne] : activeUserId
                    }
                }
            }
        ],
    })
        .then(posts => {
            console.log(posts);
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
