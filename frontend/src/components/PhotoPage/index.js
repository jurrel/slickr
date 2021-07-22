import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/photo';
import { useParams } from "react-router-dom";

import "./PhotoPage.css"

// ProfilePage component 
function PhotoPage() {
    const dispatch = useDispatch();
    const { photoId } = useParams();
    const photo = useSelector(state => state.photo);
    
    //reloads page everytime photoId changes
    useEffect(() => {
        dispatch(getPhoto(photoId));
    }, [dispatch, photoId]);


    return (
        <>
            <img src={photo[photoId]?.imageUrl} alt="picture" />
        </>
    );
};

export default PhotoPage;







