const LOAD = 'photo/LOAD';

//action creator  => used to update the reducer
const load = photos => ({
    type: LOAD,
    photos
})

export const getPhotos = () => async dispatch => {
    const response = await fetch('/api/photos');

    if (response.ok) {
        const photos = await response.json();
        dispatch(load(photos))
        return photos
    }
}

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
        default:
            return state;
    }
}

export default photoReducer;