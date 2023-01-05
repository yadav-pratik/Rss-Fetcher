import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import userReducer from '../reducers/userReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'
import sourceReducer from '../reducers/sourceReducer'
import categoryReducer from '../reducers/categoryReducer'
import articlesReducer from '../reducers/articlesReducer'


const configureStore = () => {
    return createStore(combineReducers({
        // user : userReducer,
        isLogged : isLoggedReducer,
        source : sourceReducer,
        category : categoryReducer,
        articles : articlesReducer
    }), applyMiddleware(thunk))
}

export default configureStore