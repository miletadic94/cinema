import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import modalReducer from './modalReducer' 


export default combineReducers({
    form: formReducer,
    modal: modalReducer,
})