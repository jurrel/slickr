const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Photo } = require('../../db/models');

// photo should grab all photos  yet nothing is happening
router.get('/', asyncHandler(async (req, res, next) => {
    console.log("HELLOOOOOOOO")
    // const photos = await Photo.findAll();
    // return res.json(photos);
}));



module.exports = router;