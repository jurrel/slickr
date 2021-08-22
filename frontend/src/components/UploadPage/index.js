import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPhoto } from '../../store/photo'
import { useHistory } from 'react-router-dom';
import "./UploadPage.css"


const UploadPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    const [title, setTitle] = useState('');



    const createNewImageUrl = (e) => setImageUrl(e.target.value)
    const createNewCaption = (e) => setCaption(e.target.value)
    const createNewTitle = (e) => setTitle(e.target.value)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            imageUrl,
            caption,
            title,
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
        <>
            <div className="form-position-upload">
                <form onSubmit={handleSubmit}>
                    <div className="upload-photo-border">
                        <h1>Upload</h1>
                        <input className="input_field"
                            type="text"
                            placeholder="Image URL"
                            value={imageUrl}
                            onChange={createNewImageUrl} />
                        <input className="input_field"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={createNewTitle} />
                        <input className="input_field"
                            type="text"
                            placeholder="Caption"
                            value={caption}
                            onChange={createNewCaption} />
                    </div>
                    <button type="submit" className="submit-btn-upload">Submit</button>
                    <button type="button" className="cancle-btn-upload" onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default UploadPage
