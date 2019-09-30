const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const errorHandler = require('./helpers/error-handlers');

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
app.use(errorHandler);

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/get-users', usersRouter);
app.use('/change-subscription', followersRouter);
app.use('/posts', postsRouter);

module.exports = app;
