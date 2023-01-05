import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import userReducer from '../reducers/userReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'


const configureStore = () => {
    return createStore(combineReducers({
        // user : userReducer,
        isLogged : isLoggedReducer,
    }), applyMiddleware(thunk))
}

export default configureStore