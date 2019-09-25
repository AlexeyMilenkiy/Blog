module.exports = [
    'social1', // 'The name of the database'
    'alexmilenkiy', // 'The username which is used to authenticate against the database'
    ' ', // 'The password which is used to authenticate against the database'
    {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
];
