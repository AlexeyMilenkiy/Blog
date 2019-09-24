const sequelize = require('../db/sequelize');

const addPost = (req, res) => {
    let post = req.body;

    sequelize.Post.create({...post})
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        })
};

module.exports = { addPost };
