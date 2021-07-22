const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./user');
const photoRouter = require('./photo');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photoRouter);

module.exports = router;

