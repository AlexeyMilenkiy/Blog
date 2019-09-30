'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    follower: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
  }, {});
  Follower.associate = function(models) {
    Follower.belongsTo(models.User, {foreignKey: 'following'})
  };
  return Follower;
};
