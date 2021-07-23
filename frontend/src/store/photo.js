const LOAD_ALL = 'photo/LOAD';
const LOAD_ONE = 'photo/LOADONE';
const DELETE = 'photo/DELETE';
const UPLOAD = 'photos/UPLOAD';

//action creator  => used to update the reducer
export const load = photos => ({
    type: LOAD_ALL,
    photos
});

export const loadOne = photo => ({
    type: LOAD_ONE,
    photo
});

export const deleteOne = photo => ({
    type: DELETE,
    photo
});

export const upload = photo => ({
    type: UPLOAD,
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
        dispatch(loadOne(photo));
    }
};

//Deleting a specific photo
export const deleteOnePhoto = (photoId) => async dispatch => {
    const response = await fetch(`/api/photos/${photoId}/delete`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(deleteOne(photoId));
    }
};
//////////////////////////////////////////////////////////////////////////////////////
//Upload a photo 
export const uploadPhoto = (photoData) => async dispatch => {
    const response = await fetch(`/api/photos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photoData)
    });
    if (response.ok) {
        const upload = await response.json();
        dispatch(upload(upload))
        return upload
    }
}
//////////////////////////////////////////////////////////////////////////
const initialState = {}

//Reducer
const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL: {
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
        case DELETE: {
            const photo = { ...state };
            delete photo[action.photo]
            return photo
        }
        default:
            return state;
    }
}

export default photoReducer;