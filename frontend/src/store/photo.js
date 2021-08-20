import { csrfFetch } from "./csrf";


const LOAD_ALL = 'photo/LOAD';
const LOAD_ONE = 'photo/LOADONE';
const DELETE = 'photo/DELETE';
const UPLOAD = 'photos/UPLOAD';
const EDIT = 'photos/EDIT';
const USER_PHOTOS = 'photos/USER_PHOTOS' ////

//action creator  => used to update the reducer
export const loadAllPhotos = photos => ({
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

export const edit = photo => ({
    type: EDIT,
    photo,
});

export const userPhotos = photos => ({
    type: USER_PHOTOS,
    photos
})

//Getting all photos
export const getPhotos = () => async dispatch => {
    const response = await csrfFetch('/api/photos');

    if (response.ok) {
        const photos = await response.json();
        dispatch(loadAllPhotos(photos))
        return photos
    }
}

//Getting 1 photo
export const getPhoto = (photoId) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${photoId}`);

    if (response.ok) {
        const photo = await response.json();
        dispatch(loadOne(photo));
    }
};

//Upload a photo 
export const uploadPhoto = (photo) => async (dispatch) => {
    const response = await csrfFetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(photo),
    });
    const newUploadPhoto = await response.json();

    if (response.ok) {
        dispatch(upload(newUploadPhoto))
    }
    return newUploadPhoto;
};


//Deleting a specific photo
export const deleteOnePhoto = (photoId) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${photoId}/delete`, {
        method: "DELETE"
    });
    console.log('DELETE')
    if (response.ok) {
        dispatch(deleteOne(photoId));
    }
};

//Edit photo
export const editPhoto = (payload) => async dispatch => {
    console.log('WHAT IS PAYLOAD', payload)
    const response = await csrfFetch(`/api/photos/${payload.photoId}`, {
        method: "PUT",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const updateCaption = await response.json();
        dispatch(edit(updateCaption));
        return updateCaption;
    }
};

//Getting all photos posted by user   
export const getUserPhotos = (id) => async dispatch => {
    const response = await csrfFetch(`/api/users/${id}`);
    if (response.ok) {
        const getAllUserPhotos = await response.json();
        dispatch(userPhotos(getAllUserPhotos));
    }
}


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
        case EDIT: {
            const edit = { ...state };
            edit[action.photo.id] = action.photo;
            return edit
        }
        case USER_PHOTOS: {
            const showAllUserPhotos = {};
            action.photos.forEach(photo => {
                showAllUserPhotos[photo.id] = photo
            });
            return showAllUserPhotos
        }
        default:
            return state;
    }
}

export default photoReducer;