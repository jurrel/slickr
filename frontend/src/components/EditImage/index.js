import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editPhoto } from '../../store/photo';
import { useHistory, useParams } from "react-router-dom";


export default function EditImage({ setEditImage }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { photoId } = useParams();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateCaption = (e) => setCaption(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            caption,
            title,
            userId: sessionUser.id,
            photoId
        };


        let updatePhoto = await dispatch(editPhoto(payload))
        if (updatePhoto) {
            setTitle('');
            setCaption('');
            history.push(`/photos/${photoId}`)
        }

    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setEditImage(false);
    };


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Update Title Name"
                    value={title}
                    onChange={updateTitle} />
                <input
                    type="text"
                    placeholder="Update Caption"
                    value={caption}
                    onChange={updateCaption} />
                <button type="submit">Update Comment </button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

