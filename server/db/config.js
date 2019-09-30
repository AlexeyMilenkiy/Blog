module.exports = [
    'social1', // 'The name of the database'
    'postgres', // 'The username which is used to authenticate against the database'
    '2323', // 'The password which is used to authenticate against the database'
    {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
];
