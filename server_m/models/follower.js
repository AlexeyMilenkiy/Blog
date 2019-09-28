'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    follower: DataTypes.INTEGER,
    following: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
    Follower.belongsTo(models.User);
  };
  return Follower;
};
