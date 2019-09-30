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
                // references: {
                //     model: 'User',
                //     key: 'id'
                // }
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Followers');
    }
};