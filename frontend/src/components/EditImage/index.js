import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPhoto } from '../../store/photo';
import { useHistory, useParams } from "react-router-dom";


export default function EditImage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { photoId } = useParams();
    const photo = useSelector(state => state.photos[photoId]);
    const history = useHistory();

    const [title, setTitle] = useState(photo.title);
    const [caption, setCaption] = useState(photo.title);

    const updateTitle = (e) => setTitle(e.target.value); //////////
    const updateCaption = (e) => setCaption(e.target.value); //////////


    const handleSubmit = async (e) => { ////////////////
        e.preventDefault();

        const payload = { ///////////
            caption,
            title, ////////////////
            userId: sessionUser.id
        };


        let updatePhoto = await dispatch(editPhoto(payload)) ////
        if (updatePhoto) {  ////////////////////////
            history.push(`/comments/${photoId}`)/////////////////
        }////////////////////

    }
    const handleCancelClick = (e) => {
        e.preventDefault();
    };


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={updateTitle} />
                <input
                    type="text"
                    placeholder="Caption"
                    onChange={updateCaption} />
                <button type="submit">Update </button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

