const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { User, Comment } = require('../../db/models');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {  
    console.log('hi')
    console.log(req.params)
    const { id } = req.params   //id is whatever number after the    /comments/(id)
    const comments = await Comment.findAll({
        where: { photoId: id }, //want to grab photoId and list all comments out 
        include: User
    });
    return res.json(comments)
}));


router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {    ///////////////////////////
    const { comment, userId, photoId } = req.body
  
    const createComment = await Comment.create({
        comment,
        userId,
        photoId
    })    
    return res.json(createComment) ////////////////////////////////////////////

})); ///////////////////////////////////

module.exports = router;