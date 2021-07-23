import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPhoto } from '../../store/photo'
import { useHistory } from 'react-router-dom';


const UploadPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');

    const updateImageUrl = (e) => setImageUrl(e.target.value)
    const updateCaption = (e) => setCaption(e.target.value)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const addPhoto = {
            imageUrl,
            caption,
            userId: sessionUser.id
        };

        let createPhoto = await dispatch(uploadPhoto(addPhoto))
        if (createPhoto) {
            history.push(`/photos/${createPhoto.id}`)
        }

    };

    const handleCancelClick = (e) => {
        e.preventDefault();
    };


    return (
        <section className="new-form-holder centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={updateImageUrl} />
                <input
                    type="text"
                    placeholder="Caption"
                    value={caption}
                    onChange={updateCaption} />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}

export default UploadPage
