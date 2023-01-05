import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import userReducer from '../reducers/userReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'
import sourceReducer from '../reducers/sourceReducer'
import categoryReducer from '../reducers/categoryReducer'


const configureStore = () => {
    return createStore(combineReducers({
        // user : userReducer,
        isLogged : isLoggedReducer,
        source : sourceReducer,
        category : categoryReducer
    }), applyMiddleware(thunk))
}

export default configureStore