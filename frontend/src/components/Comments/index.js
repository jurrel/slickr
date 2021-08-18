import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from "react-router-dom";
import { getComments, createComment } from "../../store/comment";




export default function Comments() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId, userId } = useParams();

    const [comment, setComment] = useState('');


    //turns the object into an array
    const comments = useSelector(state => Object.values(state.comment))

    const createANewComment = (e) => setComment(e.target.value)

    useEffect(() => {
        dispatch(getComments(photoId));
        // dispatch(createComment(userId))  //breaks Suppose to refresh page when comment is added
    }, [dispatch, photoId, userId]);

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
            history.push(`/photos/${photoId}`)
        }

    }

    return (
        <div>
            <div>
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
                </div>
            </form>

        </div>
    );
}