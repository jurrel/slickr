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
export const createComment = (comment) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${comment.photoId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })

    if (response.ok) {
        const addAComment = await response.json();
        dispatch(addComment(addAComment))
        return addAComment
    }
};

export const updateComment = (comment) => async dispatch => {
    const { id } = comment
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(comment),
    });
    if (response.ok) {
        const editAComment = await response.json();
        dispatch(editComment(editAComment))
        return editAComment
    }
}

export const deleteAComment = (id) => async dispatch => { 
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(deleteComment(id))
    }
}

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
        case ADD_COMMENT: {
            const addNewComment = { ...state }
            addNewComment[action.comment.id] = action.comment
            return addNewComment
        }
        case DELETE_COMMENT: {
            const comment = { ...state };
            delete comment[action.comment]
            return comment
        }
        case EDIT_COMMENT: { 
            const edit = { ...state };
            edit[action.comment.id] = action.comment;
            return edit
        }
        default:
            return state
    }
}

export default commentReducer;