import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import movies from '../src/reducers/movies'


const rootReducer = (state, action) => {
    if (action === "LOGOUT") {
        state.movies = undefined
    }
    return appReducer(state, action)
}

export const appReducer = combineReducers({
    movies: movies,
    form: formReducer,
})

export default rootReducer