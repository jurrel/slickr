import { csrfFetch } from './csrf';

//constnant
const LOAD_ALL_COMMENTS = 'comment/LOAD';
const ADD_COMMENT = 'comment/ADD';
const DELETE_COMMENT = 'comment/DELETE';
const EDIT_COMMENT = 'comment/EDIT';

//action creator
export const loadAllComments = comments => ({
    type: LOAD_ALL_COMMENTS,
    comments
});

export const addComment = comment => ({
    type: ADD_COMMENT,
    comment
})

export const deleteComment = comment => ({
    type: DELETE_COMMENT,
    comment
})

export const editComment = comment => ({
    type: EDIT_COMMENT,
    comment
})

//Thunk
//Gets all the comments for a specific photo
export const getComments = (id) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${id}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadAllComments(comments))
    }
};

//Creates a new comment for a specific photo
export const createComment = (comment) => async dispatch => {   //////////////////////////////
    const response = await csrfFetch(`/api/comments/${comment.photoId}`, {///////////////////////////////////
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })

    if (response.ok) {
        const addAComment = await response.json();
        dispatch(addComment(addAComment))
        return addAComment
    }
};  /////////////////////////////////////////////////////////////////////////////

//Still need a delete and an Edit thunk


const initialState = {};

//Reducer
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_COMMENTS: {
            const allComments = {}
            action.comments.forEach(comment => {
                allComments[comment.id] = comment
            });
            return {
                ...allComments, ...state
            }
        }
        case ADD_COMMENT: {/////////////////////
            const addNewComment = { ...state }
            addNewComment[action.comment.id] = action.comment
            return addNewComment
        } /////////////////
        default:
            return state
    }
}

export default commentReducer;