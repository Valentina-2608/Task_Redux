
import {compose, combineReducers,  createStore } from 'redux';
import { postsReducer } from './reducers/reducerPost';

const rootReducer = combineReducers({
    postsList:postsReducer

})
 const store = createStore(rootReducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
 
 export default store;

