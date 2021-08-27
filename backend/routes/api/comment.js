const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { User, Comment } = require('../../db/models');

//Get comments
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {  
    const { id } = req.params   //id is whatever number after the    /comments/(id)
    const comments = await Comment.findAll({
        where: { photoId: id }, //want to grab photoId and list all comments out 
        include: User
    });
    return res.json(comments)
}));

//Create a comment
router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { comment, userId, photoId } = req.body
    const createComment = await Comment.create({
        comment,
        userId,
        photoId
    })    
    return res.json(createComment)

})); 

//Does not delete 
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { id } = req.params
    const comment = await Comment.findByPk(id)
    await comment.destroy();
    res.status(204).end()
}))

// router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
//     const { id } = req.params
//     const comment = await Comment.findByPk(id)
//     const { comment } = req.body
//     await comment.update({ comment })
//     return res.json(comment)
// }))




module.exports = router; 