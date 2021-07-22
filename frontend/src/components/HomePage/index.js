import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photo';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [photo, setPhoto] = useState()

    const showPhoto = (e) => {
        history.push(`/photos/${photo.id}`)
        //e.preventDefault()
    }

    //grabs photos 1 time
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    //Object.values converts objects into arrays
    const photos = useSelector((state) => Object.values(state.photo));

    return (
        <div className="singlePhotos">
            {photos?.map((photo) => (
                <>
                    <img className="singlePhoto" src={photo.imageUrl} />
                </>
            ))}
        </div>
    )
}

export default HomePage;








