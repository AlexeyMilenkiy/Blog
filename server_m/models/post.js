'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    date: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'author_id', as: 'user'})
  };
  return Post;
};
