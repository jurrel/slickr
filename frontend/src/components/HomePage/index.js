import { useEffect} from 'react';
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
    const photos = useSelector((state) => Object.values(state.photo)); //grabs state from photoReducer
    const photo = useSelector((state) => state.photo); 


    return (
        <div>
            {photos?.map((photo) => (
                <>
                    <a href={`/photos/${photo.id}`} onClick={showPhoto}>
                        <img src={photo.imageUrl} alt="photo"/>
                    </a>
                </>
            ))}
        </div>
    )
}

export default HomePage;













