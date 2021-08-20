import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from "react-router-dom";
import { getComments, createComment, removeComment } from "../../store/comment";
import './Comments.css'



export default function Comments() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();

    const [comment, setComment] = useState('');


    //turns the object into an array
    const comments = useSelector(state => Object.values(state.comment))

    const createANewComment = (e) => setComment(e.target.value)

    useEffect(() => {
        dispatch(getComments(photoId));
    }, [dispatch, photoId]);

    if (!comments) return null;

    if (!sessionUser) {
        return <Redirect to='/login' />
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment,
            photoId,
            userId: sessionUser.id,
        }


        let createNewComment = await dispatch(createComment(payload))
        if (createNewComment) {
            setComment('')
            history.push(`/photos/${photoId}`)
        }

    }

    const deleteHelperFunction = async (e) => {
        e.preventDefault();
        await dispatch(removeComment(comment.id))
        history.push(`/photos/${photoId}`);
    }

    return (
        <div>
            <div className='comment-container'>
                {comments &&
                    comments.map(comment => (
                        <div key={comment?.id}>
                            {comment.User?.username}: {comment?.comment}
                        </div>
                    ))}
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="comment-textarea">
                    <textarea placeholder='Add a comment' value={comment} onChange={createANewComment} required></textarea>
                </div>
                <div>
                    <button onClick={handleSubmit}>Post Comment</button>
                    <button onClick={deleteHelperFunction}>DELETE Comment</button>

                </div>
            </form>


        </div>
    );
}