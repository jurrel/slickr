//This file will hold resources for the route paths beginning with /api/users
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');


//validations for signup route that expec the body of the request to have a key of username, email,
//and password with the password of the user being created
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('firstName')
    .exists({checkFalsy: true})
    .withMessage('Please provide your First Name.'),
  check('firstName')
    .not()
    .isEmail()
    .withMessage('First Name cannot be an email.'),
  check('lastName')
    .exists({checkFalsy: true})
    .withMessage('Please provide your Last Name.'),
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


router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);

module.exports = router;