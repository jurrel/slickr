const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./user');
const photoRouter = require('./photo');
const commentRouter = require('./comment');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photoRouter);
router.use('/comments', commentRouter);

module.exports = router;

