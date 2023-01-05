import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import userReducer from '../reducers/userReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'
import sourceReducer from '../reducers/sourceReducer'
import categoryReducer from '../reducers/categoryReducer'
import articlesReducer from '../reducers/articlesReducer'
import pageNoReducer from '../reducers/pageNoReducer'
import postsPerPageReducer from '../reducers/postsPerPageReducer'


const configureStore = () => {
    return createStore(combineReducers({
        // user : userReducer,
        isLogged : isLoggedReducer,
        source : sourceReducer,
        category : categoryReducer,
        articles : articlesReducer,
        pageNo : pageNoReducer,
        postsPerPage : postsPerPageReducer
    }), applyMiddleware(thunk))
}

export default configureStore