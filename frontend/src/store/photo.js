const LOAD = 'photo/LOAD';
const LOAD_ONE = 'photo/LOADSINGLE';

//action creator  => used to update the reducer
export const load = photos => ({
    type: LOAD,
    photos
});

export const loadOne = photo => ({
    type: LOAD_ONE,
    photo
});

//Getting all photos
export const getPhotos = () => async dispatch => {
    const response = await fetch('/api/photos');

    if (response.ok) {
        const photos = await response.json();
        dispatch(load(photos))
        return photos
    }
}

//Getting 1 photo
export const getPhoto = (photoId) => async dispatch => {
    const response = await fetch(`/api/photos/${photoId}`);

    if (response.ok) {
        const photo = await response.json();
        console.log("single photo", photo);
        dispatch(loadOne(photo));
    }
};

const initialState = {}

//Reducer
const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allPhoto = {};
            action.photos.forEach(photo => {
                allPhoto[photo.id] = photo
            });
            return {
                ...state,       //creates copy of the state
                ...allPhoto    //fills the copy of the state and then returns it
            };
        }
        case LOAD_ONE: {
            const onePhoto = { ...state };
            onePhoto[action.photo.id] = action.photo;
            return onePhoto
        }
        default:
            return state;
    }
}

export default photoReducer;