import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { createLogger } from "redux-logger"

const configureStore = () => {

    //second parameter is inital state
    //its overriden in reducers
    return createStore(rootReducer,
        {},
        applyMiddleware(createLogger()))
}

export default configureStore