'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Follower,
        {
          targetKey: 'id',
          foreignKey: 'following',
          as: 'followers',
          onDelete: 'cascade',
        });

    User.hasMany(models.Post,
        {
          foreignKey: 'author_id',
          as: 'posts',
          onDelete: 'cascade',
        });
  };
  return User;
};
