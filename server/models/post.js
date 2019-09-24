module.exports = (sequelize, Sequelize) => {
    return sequelize.define('post', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            title: {
                type: Sequelize.STRING,
                allowNull: false
            },

            text: {
                type: Sequelize.TEXT,
                allowNull: false,
                unique: true
            },

            date: {
                type: Sequelize.STRING,
                allowNull: false
            },
        },
        {
            tableName: 'posts'
        });
};
