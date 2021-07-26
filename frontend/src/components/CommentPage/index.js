
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/photo';
import { useParams, useHistory } from "react-router-dom";
import { deleteOnePhoto } from "../../store/photo";

function CommentPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const photo = useSelector(state => state.session);
    console.log("hiiiiiiiiiiiii", photo)
    return (
        <h1>HIIIIIIII</h1>
    )
}

export default CommentPage;













