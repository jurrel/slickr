import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photo';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();

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








