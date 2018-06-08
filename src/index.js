import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Routes from "./routes"
import configureStore from './createStore';

const store = configureStore()

store.dispatch({
    type: "NEW",
    payload: 10
})

store.dispatch({
    type: "DELETE",
    payload: 20,
})

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
