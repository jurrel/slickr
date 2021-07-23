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
        //e.preventDefault()
    }

    //grabs photos 1 time
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    //Object.values converts objects into arrays
    const photos = useSelector((state) => Object.values(state.photo));
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













