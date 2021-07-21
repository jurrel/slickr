const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Photo, User } = require('../../db/models');

// gets all the photos
router.get('/', asyncHandler(async (req, res, next) => {
    const photos = await Photo.findAll()
    return res.json(photos);
}));

//gets a single photo
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

    const photoId = parseInt(req.params.id, 10);
    const photo = await Photo.findByPk(photoId);
    return res.json(photo)
}));



module.exports = router;














