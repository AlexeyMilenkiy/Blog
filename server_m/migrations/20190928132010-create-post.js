'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            text: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.STRING
            },
            author_id: {
                type: Sequelize.INTEGER,
                // references: {
                //     model: 'User',
                //     key: 'id'
                // }
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Posts');
    }
};