import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotos } from '../../store/photo';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory()
    
    const showPhoto = (e) => {
        history.push(`/photos/${photo.id}`)
    }

    //grabs photos 1 time updates state in our store
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    //Object.values converts objects into arrays
    const photos = useSelector((state) => Object.values(state.photo));
    const photo = useSelector((state) => state.photo);


    return (
        <div>
            <div className='photo-layout'>
                {photos?.map((photo) => (
                    <div key={photo.id} className="photo-description-box">
                        <a href={`/photos/${photo.id}`} onClick={showPhoto}>
                            <img className='single-photo-home-page' src={photo.imageUrl} alt="" />
                            <div className="photo-description-content">
                                <p> {photo.title} </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HomePage;



















