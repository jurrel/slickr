import { csrfFetch } from "./csrf";


const LOAD_ALL = 'photo/LOAD';
const LOAD_ONE = 'photo/LOADONE';
const DELETE = 'photo/DELETE';
const UPLOAD = 'photos/UPLOAD';
const EDIT = 'photos/EDIT';

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

    if (response.ok) {
        dispatch(deleteOne(photoId));
    }
};

//Edit photo
//trying to see if i can edit on same page
// export const editPhoto = (payload) => async dispatch => {
//     const response = await csrfFetch(`/api/photos/${payload.photoId}`, {
//         method: "PUT",
//         headers: { 'Content-Type': "application/json" },
//         body: JSON.stringify(payload)
//     });

//     if (response.ok) {
//         const updateCaption = await response.json();
//         dispatch(edit(updateCaption));
//         return updateCaption;
//     }
// };

//if it fails, ill edit on a new page code below
export const editPhoto = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${payload.photoId}/edit`, {
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
            const edit = {...state};
            edit[action.photo.id] = action.photo;
            return edit
          }
        default:
            return state;
    }
}

export default photoReducer;