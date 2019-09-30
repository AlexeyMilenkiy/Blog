'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Followers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            follower: {
                type: Sequelize.INTEGER
            },
            following: {
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Followers');
    }
};