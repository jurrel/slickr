const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Photo, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')

// Get all the photos
router.get('/', asyncHandler(async (req, res, next) => {
    const photos = await Photo.findAll()
    return res.json(photos);
}));

//Get photo
router.get('/:id', asyncHandler(async (req, res) => {

    const photoId = parseInt(req.params.id, 10);
    const photo = await Photo.findByPk(photoId, {  
        include: User
    });
    return res.json(photo) 
}));

// Edit photo 
router.put('/:id(\\d+)', requireAuth, async (req, res) => {
    const photoId = parseInt(req.params.id, 10);
    const { title, caption } = req.body
    const photoEdit = await Photo.findByPk(photoId, {
        include: User
    });
    await photoEdit.update({ title, caption });
    return res.json(photoEdit);
});

//Delete photo
router.delete('/:id/delete', requireAuth, async (req, res) => {
    const photoId = parseInt(req.params.id, 10);
    const deletePhoto = await Photo.findByPk(photoId);

    await deletePhoto.destroy()

    res.status(204).end()
});

//Upload/Add photo
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, caption, albumId } = req.body
    const pictureUpload = await Photo.create({
        userId,
        title,
        imageUrl,
        caption,
        albumId,
    })
    return res.json(pictureUpload)
}))
module.exports = router;














