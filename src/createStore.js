import { createStore, applyMiddleware } from "redux"
import rootReducer from './redux/reducer'
import { createLogger } from "redux-logger"

const createHistory = typeof document !== undefined ? require('history/createBrowserHistory').default: () => {};

export const history = createHistory();

const configureStore = () => {

    //second parameter is inital state
    //its overriden in reducers
    return createStore(rootReducer,
        {}
        ,
        // applyMiddleware(createLogger())
    )
}

export default configureStore