const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const loginRouter = require('./routes/login-router');
const registerRouter = require('./routes/register-router');
const usersRouter = require('./routes/users-router');
const followersRouter = require('./routes/followers-router');
const postsRouter = require('./routes/posts-router');

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/login', loginRouter);
app.use('/api/v1/register', registerRouter);
app.use('/api/v1/get-users', usersRouter);
app.use('/api/v1/change-subscription', followersRouter);
app.use('/api/v1/posts', postsRouter);

module.exports = app;
