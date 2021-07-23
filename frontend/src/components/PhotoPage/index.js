import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/photo';
import { useParams, useHistory } from "react-router-dom";
import { deleteOnePhoto } from "../../store/photo";

import "./PhotoPage.css"

// ProfilePage component 
function PhotoPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const photo = useSelector(state => state.photo);

    //reloads page everytime photoId changes
    useEffect(() => {
        dispatch(getPhoto(photoId));
    }, [dispatch, photoId]);

    //Deleting photo 
    const deleteHelperFunction = (e) => {
        e.preventDefault();
        dispatch(deleteOnePhoto(photoId));
        history.push(`/`);
    }


    return (
        <>
            <img src={photo[photoId]?.imageUrl} alt="picture" />
            <div>
                <button type="submit">Edit</button>
                <button type="submit">Comment</button>
                <button onClick={deleteHelperFunction}>Delete</button>
            </div>
        </>
    );
};

export default PhotoPage;







