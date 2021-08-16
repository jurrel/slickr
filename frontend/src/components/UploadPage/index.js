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
    const [title, setTitle] = useState('');  ////////////////

    const createNewImageUrl = (e) => setImageUrl(e.target.value)
    const createNewCaption = (e) => setCaption(e.target.value)
    const createNewTitle = (e) => setTitle(e.target.value)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            imageUrl,
            caption,
            title, ////////////////
            userId: sessionUser.id
        };

        let createPhoto = await dispatch(uploadPhoto(payload))
        if (createPhoto) {
            history.push(`/photos/${createPhoto.id}`)
        }

    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/homepage')
    }; 


    return (
        <section className="new-form-holder centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={createNewImageUrl} />
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={createNewTitle} />
                <input
                    type="text"
                    placeholder="Caption"
                    value={caption}
                    onChange={createNewCaption} />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    )
}

export default UploadPage
