const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Photo } = require('../../db/models');


const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a name with at least 2 characters'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a last name with at least 2 characters'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

//user sign-up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName, username } = req.body;
    const user = await User.signup({ email, firstName, lastName, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

//gets post related to the user
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params
  const findUserPhotos = await Photo.findAll({
    where: { userId: id },
    include: User
  })
  return res.json(findUserPhotos)
}));


module.exports = router;