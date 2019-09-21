const Sequelize = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(...config);

const Op = Sequelize.Op;
const User = require('../models/user')(sequelize, Sequelize);

sequelize.sync()
    .then(()=>{ console.log('Databases and tables created!') })
    .catch(err=> console.log(err));


sequelize.authenticate()
    .then(() => { console.log('Connection has been established successfully.'); })
    .catch(err => { console.error('Unable to connect to the database:', err); });


module.exports = {
    User,
    Op,
    sequelize,
    Sequelize
};
