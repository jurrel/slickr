const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Comment } = require('../../db/models');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {   //have a problem with /:id by itself not working. 
    console.log('hi')
    console.log(req.params)
    const {id} = req.params   //id is whatever number after the    /comments/(id)
    const comments = await Comment.findAll({
        where: {photoId: id}, //want to grab photoId and list all comments out 
        include: User
    });
    return res.json(comments)
}));

module.exports = router;