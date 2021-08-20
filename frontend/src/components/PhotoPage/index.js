import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/photo';
import { useParams, useHistory, Redirect } from "react-router-dom";
import { deleteOnePhoto } from "../../store/photo";
import Comments from '../Comments/';
import EditImage from '../EditImage/';
import "./PhotoPage.css"


function PhotoPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const photo = useSelector(state => state.photo);
    const sessionUser = useSelector(state => state.session.user);

    const [editImage, setEditImage] = useState(false)
 

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

    const updateHelperFunction = (e) => {
        setEditImage(!editImage)
    }


    return (
        <>

            <div className='mega-container'>
                <div className="title-single-photo-page">
                    {photo[photoId]?.title}
                </div>
                <img className='single-photo-photo-page' src={photo[photoId]?.imageUrl} alt="picture" />
                <div>
                    {photo[photoId]?.caption}
                </div>
                <div>
                    By {photo[photoId]?.User?.username}
                </div>
            </div>
            {photo[photoId]?.userId === sessionUser.id ?
                <button onClick={deleteHelperFunction}>Delete Photo</button> : <></>
            }
            {photo[photoId]?.userId === sessionUser.id ?
                <button onClick={updateHelperFunction}>Edit Photo</button> : <></>
            }
            {editImage && <EditImage setEditImage={setEditImage} />} {/*So if edit image is true show edit image buttons*/}
            <Comments />
        </>
    );
};

export default PhotoPage;










