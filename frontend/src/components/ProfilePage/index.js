import { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPhotos } from '../../store/photo';
import './ProfilePage.css';


const ProfilePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const userPhotos = useSelector((state) => Object.values(state.photo));

    useEffect(() => {
        dispatch(getUserPhotos(id))
    }, [dispatch, id]);


    if (!userPhotos) return null;

    if (!sessionUser) {
        return (
            <Redirect to='/login' />
        )
    }

    return (
        <>
        <div className="title-single-photo-profile-page">MY PHOTOS</div>
            <div className='photo-layout-profile-page'>
                {userPhotos?.map((photo) => (
                    <div>
                        <a href={`/photos/${photo.id}`}>
                            <div class="img-box-profile-page">
                                <img src={photo.imageUrl} alt="photo" />
                                <div class="photo-content">
                                    <p>{photo.title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProfilePage;
