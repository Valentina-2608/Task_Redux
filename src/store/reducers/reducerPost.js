import {ADD_POST, DELETE_POST,EDIT_POST} from '../types'
const initialState= {
    posts:[],
}

export const postsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts:[...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !=action.payload)
            }
            case EDIT_POST:
            const savedPost = state.posts.map(post => post.id === action.payload.id ? {
                ...post,
                title:action.payload.title} : post)
            return {
                ...state,
                posts: savedPost
            }

            default: return state;
        }
       

}