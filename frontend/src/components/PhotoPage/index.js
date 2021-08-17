import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit, getPhoto } from '../../store/photo';
import { useParams, useHistory, Redirect } from "react-router-dom";
import { deleteOnePhoto, editPhoto } from "../../store/photo";
import Comments from '../Comments/';
import EditImage from '../EditImage/';
import "./PhotoPage.css"


function PhotoPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId, caption, title } = useParams(); ///////////////////////////////////////////////
    const photo = useSelector(state => state.photo);
    const sessionUser = useSelector(state => state.session.user);

    const [editImage, setEditImage] = useState(false)
    console.log('THIS IS PHOTO', photo)
    console.log('THIS IS SESSION USER', sessionUser)
    console.log('THIS IS PHOTOID photopage', photoId)

    //reloads page everytime photoId changes
    useEffect(() => {
        dispatch(getPhoto(photoId));
    }, [dispatch, photoId]);



    if (!sessionUser) {
        return (
            <Redirect to='/' />
        )
    }

    //Lets original user delete their photo
    const deleteHelperFunction = (e) => {
        e.preventDefault();
        dispatch(deleteOnePhoto(photoId));
        history.push(`/homepage`);
    }

    // // Lets original user update their photo DOESNT WORK
    const updateHelperFunction = (e) => { //////////////////////////////////
        // e.preventDefault();
        // dispatch(editPhoto({ title, caption, photoId }));
        // history.push(`/photos/${photoId}`);
        setEditImage(!editImage)
    } //////////////////////////////////////////////////////////


    return (
        <>
            <img src={photo[photoId]?.imageUrl} alt="picture" />
            <div>{photo[photoId]?.title} </div>
            <div>{photo[photoId]?.caption} </div>
            <div>{photo[photoId]?.username}</div> {/*Poster's username is not displaying Need a way to convert user id to username*/}


            {photo[photoId]?.userId === sessionUser.id ?
                <button onClick={deleteHelperFunction}>Delete Photo</button> : <></>
            }
            {photo[photoId]?.userId === sessionUser.id ?
                <button onClick={updateHelperFunction}>Edit Photo</button> : <></>
            }
            <Comments />
            {editImage && <EditImage setEditImage={setEditImage} /> } {/*So if edit image is true show edit image buttons*/}
        </>
    );
};

export default PhotoPage;










