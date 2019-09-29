module.exports = [
    'database_name',      // 'The name of the database'
    'user_name', // 'The username which is used to authenticate against the database'
    'user_password',            // 'The password which is used to authenticate against the database'
    {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
];
